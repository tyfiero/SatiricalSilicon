import { SimpleSequentialChain, LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
  } from "langchain/prompts";


export const generateImagePrompt = async (subjectMatter) =>{
    const llm = new ChatOpenAI({ temperature: 0.7 });
    const imagePrompt = ChatPromptTemplate.fromPromptMessages([
        SystemMessagePromptTemplate.fromTemplate(
            `You are a world-class prompt engineer for AI art generating algorithms.
  
            Please generate a highly descriptive and optimized prompt for an AI image generator, that will create the perfect cover image for a blog post on a satirical tech news site (max 40 words). Given a title and description, think about what kind of image would best represent the subject matter. 
            
            Here is the title and description of the blog post:
            
            " ${subjectMatter} "
            
            Use the following guidelines for generating the prompt:   
            Begin with a general overview of the subject, focusing on its most defining characteristics.
            Describe the subject's appearance in greater detail, using vivid adjectives and strong verbs.
            Incorporate the subject's surroundings, highlighting the environment and any other objects or elements in the scene.
            Add atmosphere and mood to the prompt by describing the lighting, colors, and any other sensory elements.
            Mention camera angle, perspective, and any other composition details that would contribute to a more engaging and dynamic image.
            Add any unique or distinctive features of the subject that would make it stand out.
            Conclude by emphasizing the desired quality and style of the final image, such as photorealism, surrealism, or artistic interpretation.
            Example prompt output: "A photorealistic image of a robot, with a microwave in the background, in a kitchen, with a dark and moody atmosphere. The robot is holding a frozen burrito, and is looking at it with confusion."
            The prompt should be 1-2 sentences long MAX.
            Output ONLY the prompt, and nothing else.`
        ),
        HumanMessagePromptTemplate.fromTemplate("{subject}"),
      ]);
 
    const imageGenChain = new LLMChain({ llm: llm, prompt: imagePrompt });

  
    const overallChain = new SimpleSequentialChain({
    chains: [imageGenChain],
    verbose: true,
    });
    const DALLEPrompt = await overallChain.run("");
    return DALLEPrompt;
}