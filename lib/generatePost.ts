import { SimpleSequentialChain, LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
} from "langchain/prompts";


export const generatePost = async () =>{
    const llm = new ChatOpenAI({ 
        temperature: 0.7, 
        modelName: 'gpt-4' 
    });
    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
        SystemMessagePromptTemplate.fromTemplate(
            `Act as a talented journalist for "The Onion", and write 5 'The Onion' style headlines and descriptions for the subject the user provides. The funnier the better. Dead beat, sarcastic, satirical, and dark humor is encouraged. Ensure that both the title, and description are satirical in nature, and are essentially a headline and sub-headline. The sub-headline should complement the headline, and continue the joke. Avoid using the single quote (') character. Follow this format:
            title:
            description:`
        ),
        HumanMessagePromptTemplate.fromTemplate("{subject}"),
      ]);
 
    const ideaGenerationChain = new LLMChain({ llm: llm, prompt: chatPrompt });

    // This is an LLMChain to select an idea from the list of ideas.
    const selectionLLM = new ChatOpenAI({ 
        temperature: 0.2, 
        modelName: 'gpt-4' 
    });

    
    const selectIdeaTemplate = ChatPromptTemplate.fromPromptMessages([
        SystemMessagePromptTemplate.fromTemplate(`Given the the following list of satirical news stories, select the ONE that is the most funny, clever and relevant, return ONLY the title and description of the selected story, like this: " title: \ndescription:`
    ),
    HumanMessagePromptTemplate.fromTemplate("{ideas}"),
  ]);
    const selectionChain = new LLMChain({
    llm: selectionLLM,
    prompt: selectIdeaTemplate,
    });


    //Post generation chain
    //----------------------------------------------


    const now = new Date();
    // This is an LLMChain to generate the blog post.
    const blogPostGeneration = ChatPromptTemplate.fromPromptMessages([
        SystemMessagePromptTemplate.fromTemplate(`I'm making a blog news site, that emulates the style of 'the onion', dead beat, funny, and satirical. It is sarcastic in nature, and all about tech, programming, and AI. I am using mdx to create blog posts for it. Below is an example mdx file that contains a post. I need you to generate a new MDX file for a new blog post, for the title and description that the user provides. Generate the mdx in the same exact format as this, with new content. In a hilarious dead beat, satirical, engaging, 'the onion' style. Feel free to use markdown in the MDX file to format the blog post. For the date field, use this date: ${new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })).toISOString()}. Surround the title and description with single quotes (').

        
        ---
        title: 'New AI Algorithm Writes Better Code Than Human Developers, Still Can't Figure Out How to Use a Microwave.'
        slug: new-ai-algorithm-writes-better-code-than-human-developers-still-cant-figure-out-how-to-use-a-microwave
        description: 'Robot Overlords Delayed by Incapability to Heat Frozen Burrito.'
        date: "2023-05-22T06:42:55.089Z"
        imgUrl: "/assets/robotmicrowave.png"
        published: true
        ---
        
        (post content here, in markdown format, 100-250 words)`
    ),
    HumanMessagePromptTemplate.fromTemplate("{titleDescription}"),
  ]);
    const postChain = new LLMChain({
    llm: selectionLLM,
    prompt: blogPostGeneration,
    });

    const overallChain = new SimpleSequentialChain({
    chains: [ideaGenerationChain, selectionChain, postChain],
    verbose: true,
    });
    console.log('pre chain')
    const blogPost = await overallChain.run("tech industry news, or AI, or programmer / developer stories");
    console.log('post chain')
    console.log(blogPost);
    return blogPost;
}