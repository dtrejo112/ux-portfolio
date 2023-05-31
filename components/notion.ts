
// @ts-nocheck
import { Client, isFullPage } from '@notionhq/client';


const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getProjects() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  const response = await notion.databases.query({
    database_id: databaseId ?? "",
  });
  
  return response.results;
}

export async function getLinkedInPageProperties() {
  const pageId = process.env.NOTION_LINKEDIN_PAGE_ID;

  const response = await notion.pages.retrieve({ 
    page_id: pageId ?? "",
  });

  return response.properties;
}


export async function getLinkedInPageBlocks() {
  const blockId = process.env.NOTION_LINKEDIN_PAGE_ID;

  const response = await notion.blocks.children.list({ 
    block_id: blockId ?? "",
    page_size: 65,
  });
  return response.results;
}

export async function getSR1PageProperties() {
  const pageId = process.env.NOTION_SR1_PAGE_ID;

  const response = await notion.pages.retrieve({ 
    page_id: pageId ?? "",
  });

  return response.properties;
}


export async function getSR1PageBlocks() {
  const blockId = process.env.NOTION_SR1_PAGE_ID;

  const response = await notion.blocks.children.list({ 
    block_id: blockId ?? "",
    page_size: 65,
  });
  return response.results;
}

export async function getTeachMiPageProperties() {
  const pageId = process.env.NOTION_TEACHMI_PAGE_ID;

  const response = await notion.pages.retrieve({ 
    page_id: pageId ?? "",
  });

  return response.properties;
}


export async function getTeachMiPageBlocks() {
  const blockId = process.env.NOTION_TEACHMI_PAGE_ID;

  const response = await notion.blocks.children.list({ 
    block_id: blockId ?? "",
    page_size: 75,
  });
  return response.results;
}

export async function getEmpowerLinkPageProperties() {
  const pageId = process.env.NOTION_EMPOWERLINK_PAGE_ID;

  const response = await notion.pages.retrieve({ 
    page_id: pageId,
  });

  return response.properties ?? "";
}


export async function getEmpowerLinkPageBlocks() {
  const blockId = process.env.NOTION_EMPOWERLINK_PAGE_ID;

  const response = await notion.blocks.children.list({ 
    block_id: blockId ?? "",
    page_size: 65,
  });

  return response.results;
}

export async function getMoviTixPageProperties() {
  const pageId = process.env.NOTION_MOVITIX_PAGE_ID;

  const response = await notion.pages.retrieve({ 
    page_id: pageId ?? "",
  });

  return response.properties;
}


export async function getMoviTixPageBlocks() {
  const blockId = process.env.NOTION_MOVITIX_PAGE_ID;

  const response = await notion.blocks.children.list({ 
    block_id: blockId ?? "",
    page_size: 65,
  });

  
  return response.results;
}
