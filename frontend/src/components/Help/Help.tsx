import React from "react"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { FaChevronDown } from "react-icons/fa"

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequent asked questions
      </h1>
      <div className="flex justify-center flex-col w-1/2">
        <>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div>1. What is Video Transcript Summarization?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>
                  Video transcript summarization is the process of condensing
                  the content of a video into a concise written summary. This
                  summary captures the key points and main ideas discussed in
                  the video.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <div>2. How does Video Transcript Summarization work?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>
                  Video transcript summarization utilizes advanced natural
                  language processing (NLP) and machine learning algorithms to
                  analyze the spoken content of a video. These algorithms
                  extract important phrases, sentences, and concepts, and then
                  generate a summary that encapsulates the essence of the video.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <div>3. Why is Video Transcript Summarization useful?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>
                  Video transcript summarization provides several benefits:
                  <ul>
                    <li>Saves time</li>
                    <li>Accessibility</li>
                    <li>Reference</li>
                  </ul>
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <div>
                4. How accurate are the summaries generated by Video Transcript
                Summarization?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>
                  The accuracy of the summaries depends on the quality of the
                  underlying algorithms and the complexity of the video content.
                  While efforts are made to ensure accuracy, it's important to
                  note that summarization algorithms may occasionally miss
                  nuances or context present in the original video.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <div>
                5. Can I customize the length or focus of the summaries?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>
                  Yes, depending on the platform or tool you're using, you may
                  have options to customize the length or focus of the
                  summaries.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              <div>
                6. Are there any limitations to Video Transcript Summarization?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>
                  While Video Transcript Summarization is a powerful tool, it
                  may have limitations in accurately summarizing highly
                  technical or nuanced content. Additionally, accents,
                  background noise, and poor audio quality can affect the
                  accuracy of the summaries.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel7-content"
              id="panel7-header"
            >
              <div>
                7. Is Video Transcript Summarization available for all languages
                and types of videos?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>
                  Video transcript summarization is more readily available for
                  popular languages and common video formats. However, its
                  availability for less common languages or specialized video
                  content may vary.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel8-content"
              id="panel8-header"
            >
              <div>
                8. Can I use Video Transcript Summarization for commercial
                purposes?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>
                  Many Video Transcript Summarization tools and services offer
                  commercial licenses or subscription plans for businesses and
                  organizations. Be sure to review the terms of service and
                  licensing agreements for each tool to ensure compliance with
                  your intended usage.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel9-content"
              id="panel9-header"
            >
              <div>
                9. How can I get started with Video Transcript Summarization?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>
                  You can start by exploring online platforms, software
                  applications, or APIs that offer Video Transcript
                  Summarization services. Many of these tools provide
                  user-friendly interfaces or documentation to help you get
                  started with generating summaries from video transcripts.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
        </>
      </div>
    </div>
  )
}

export default Help
