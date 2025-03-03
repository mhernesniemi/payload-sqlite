import { Field } from "payload";

export const linkField: Field[] = [
  {
    name: "isExternal",
    type: "checkbox",
    label: "External link",
  },
  {
    name: "internalUrl",
    type: "relationship",
    relationTo: ["articles", "collection-pages", "news"],
    required: true,
    admin: {
      condition: (_, siblingData) => !siblingData.isExternal,
    },
  },
  {
    name: "externalUrl",
    type: "text",
    required: true,
    admin: {
      condition: (_, siblingData) => siblingData.isExternal,
    },
  },
];

export const linkFieldWithLabel: Field[] = [
  {
    name: "label",
    type: "text",
  },
  ...linkField,
];
