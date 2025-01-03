"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { ListIcon, RulesIcon, SkinIcon } from "@/components/icons";

export default function WhitelistPage() {
  return (
    
    <div className="justify-center flex-auto">
      <div className="flex flex-row mb-5">
        <h1 className={title()}>Get Whitelisted Today!</h1>
      </div>
      <div className="flex flex-row">
        <Accordion defaultExpandedKeys={["1"]} variant="splitted">
          <AccordionItem
            key="1"
            aria-label="What are the rules?"
            className="mb-2"
            title="What are the rules?"
            startContent={<RulesIcon />}
          >
            <ul className="list-disc list-inside text-left">
              <li className="mb-2">
                You must be 18+ years old (In certain situations we will waive
                this requirement)
              </li>
              <li className="mb-2">
                Have some working knowledge of how a demolition derby works or
                at least be willing to follow directions
              </li>
              <li className="mb-2">
                Must have paid for RDP Patreon (Screenshot Required)
              </li>
              <li className="mb-2">
                We ask that during events that you be in one of the voice
                channels for proper communication.
              </li>
              <li className="mb-2">
                This server is personally funded and developed by me. I&apos;m
                open to any suggestions. Please put them in the suggestions
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="How do I get whitelisted?"
            className="mb-2"
            title="How do I get whitelisted?"
            startContent={<ListIcon />}
          >
            Join the discord to get more info on whitelisting!
            <div className="flex flex-row my-4 justify-center">
              <a
                href={siteConfig.links.discord}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-blue-500"
                  icon={faDiscord}
                  size="4x"
                />
              </a>
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Can I add my custom skins?"
            className="mb-2"
            title="Can I add my custom skins?"
            startContent={<SkinIcon />}
          >
            Yes! You can add pre-made skins, or commission our staff to make one
            for you!.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
