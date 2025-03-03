import { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical";
import React from "react";
import type {
  CTABlock as CTABlockType,
  LinkListBlock as LinkListBlockType,
  MediaBlock as MediaBlockType,
  QuoteBlock as QuoteBlockType,
  VideoEmbedBlock as VideoEmbedBlockType,
  LargeFeaturedPostBlock as LargeFeaturedPostBlockType,
  SmallFeaturedPostsWrapperBlock as SmallFeaturedPostsWrapperBlockType,
  ContactsBlock as ContactsBlockType,
  HeroBlock as HeroBlockType,
  DynamicListBlock as DynamicListBlockType,
} from "@/payload-types";
import { CTABlock } from "./blocks/CTABlock";
import { MediaBlock } from "./blocks/MediaBlock";
import { QuoteBlock } from "./blocks/QuoteBlock";
import { VideoEmbedBlock } from "./blocks/VideoEmbedBlock";
import { ContactsBlock } from "./blocks/ContactsBlock";
import { LinkListBlock } from "./blocks/LinkListBlock";
import { LargeFeaturedPostBlock } from "./blocks/LargeFeaturedPostBlock";
import SmallFeaturedPostsBlock from "./blocks/SmallFeaturedPostsBlock";
import { TextRenderer } from "./TextRenderer";
import { HeroBlock } from "./blocks/HeroBlock";
import DynamicListBlock from "./blocks/DynamicListBlock";
type BaseBlockTypes =
  | CTABlockType
  | MediaBlockType
  | QuoteBlockType
  | VideoEmbedBlockType
  | LinkListBlockType
  | LargeFeaturedPostBlockType
  | SmallFeaturedPostsWrapperBlockType
  | ContactsBlockType
  | HeroBlockType
  | DynamicListBlockType;

export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<BaseBlockTypes>;
type BlockTypes = BaseBlockTypes;

type Props = {
  nodes?: NodeTypes[];
  blocks?: BlockTypes[];
};

export const BlockRenderer = ({ nodes, blocks }: Props) => {
  if (!nodes && !blocks) return null;

  const renderBlock = (block: BaseBlockTypes) => {
    switch (block.blockType) {
      case "cta":
        return <CTABlock key={block.id} block={block} />;
      case "media":
        return <MediaBlock key={block.id} block={block} />;
      case "quote":
        return <QuoteBlock key={block.id} block={block} />;
      case "videoEmbed":
        return <VideoEmbedBlock key={block.id} block={block} />;
      case "contacts":
        return <ContactsBlock key={block.id} block={block} />;
      case "linkList":
        return <LinkListBlock key={block.id} block={block} />;
      case "largeFeaturedPost":
        return <LargeFeaturedPostBlock key={block.id} block={block} />;
      case "smallFeaturedPostsWrapper":
        return <SmallFeaturedPostsBlock key={block.id} block={block} />;
      case "hero":
        return <HeroBlock key={block.id} block={block} />;
      case "dynamicList":
        return <DynamicListBlock key={block.id} block={block} />;
      default:
        return null;
    }
  };

  const renderNodes = (nodesToRender: NodeTypes[]) => {
    return nodesToRender.map((node, index) => {
      if (
        node.type === "text" ||
        node.type === "heading" ||
        node.type === "list" ||
        node.type === "listitem" ||
        node.type === "paragraph"
      ) {
        return <TextRenderer key={index} node={node} index={index} />;
      }

      if (node.type === "block" && node.fields) {
        return renderBlock(node.fields);
      }

      return null;
    });
  };

  const renderBlocks = (blocksToRender: BlockTypes[]) => {
    return blocksToRender.map(renderBlock);
  };

  if (nodes) return renderNodes(nodes);
  if (blocks) return renderBlocks(blocks);

  return null;
};
