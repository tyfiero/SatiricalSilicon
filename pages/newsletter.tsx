import React from "react";
import Link from "next/link";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import Head from "next/head";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import MotionImage from "@/components/etc/animation/MotionImage";

function Newsletter() {
  return (
    <>
      <Head>
        <title>Newsletter</title>
        <meta
          name="description"
          content={``}
        />
      </Head>
      <div className="flex flex-col items-center page-container">
        <h1 className="text-left heading-lg fade-effect-quick !mb-0 ">
        Newsletter
        </h1>

        <div className=" lg:w-full sm:!w-[90%] ">
          <DualSection colReverse>
            <TextSection cn=" lg:min-w-[36rem] sm:min-w-full lg:w-full sm:!w-full ">
             
            
             
              <MotionText>
                <div className="w-full ">
                  <MotionHeader delay={0.2}>
                    <h2 className={"font-bold heading-sm text-left "}>
                     Coming soon...
                    </h2>
                
                  
                  </MotionHeader>
                  
                </div>
              </MotionText>
            </TextSection>

          
          </DualSection>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
