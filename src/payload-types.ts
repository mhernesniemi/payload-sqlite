/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    articles: Article;
    'collection-pages': CollectionPage;
    news: News;
    references: Reference;
    categories: Category;
    contacts: Contact;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    articles: ArticlesSelect<false> | ArticlesSelect<true>;
    'collection-pages': CollectionPagesSelect<false> | CollectionPagesSelect<true>;
    news: NewsSelect<false> | NewsSelect<true>;
    references: ReferencesSelect<false> | ReferencesSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    contacts: ContactsSelect<false> | ContactsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    'front-page': FrontPage;
    'main-menu': MainMenu;
  };
  globalsSelect: {
    'front-page': FrontPageSelect<false> | FrontPageSelect<true>;
    'main-menu': MainMenuSelect<false> | MainMenuSelect<true>;
  };
  locale: 'fi' | 'en';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  role: 'admin' | 'editor' | 'user';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  'alt en'?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles".
 */
export interface Article {
  id: number;
  title: string;
  heroText?: string | null;
  heroImage?: (number | null) | Media;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  slug: string;
  author: number | User;
  publishedDate: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collection-pages".
 */
export interface CollectionPage {
  id: number;
  title: string;
  heroText?: string | null;
  heroImage?: (number | null) | Media;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  slug: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: number;
  title: string;
  heroText?: string | null;
  heroImage?: (number | null) | Media;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  slug: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "references".
 */
export interface Reference {
  id: number;
  title: string;
  heroText?: string | null;
  heroImage?: (number | null) | Media;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  slug: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  label: string;
  slug: string;
  parent?: (number | null) | Category;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts".
 */
export interface Contact {
  id: number;
  name: string;
  title?: string | null;
  email: string;
  phone?: string | null;
  image?: (number | null) | Media;
  categories?: (number | Category)[] | null;
  order?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'articles';
        value: number | Article;
      } | null)
    | ({
        relationTo: 'collection-pages';
        value: number | CollectionPage;
      } | null)
    | ({
        relationTo: 'news';
        value: number | News;
      } | null)
    | ({
        relationTo: 'references';
        value: number | Reference;
      } | null)
    | ({
        relationTo: 'categories';
        value: number | Category;
      } | null)
    | ({
        relationTo: 'contacts';
        value: number | Contact;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  role?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  'alt en'?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles_select".
 */
export interface ArticlesSelect<T extends boolean = true> {
  title?: T;
  heroText?: T;
  heroImage?: T;
  content?: T;
  slug?: T;
  author?: T;
  publishedDate?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collection-pages_select".
 */
export interface CollectionPagesSelect<T extends boolean = true> {
  title?: T;
  heroText?: T;
  heroImage?: T;
  content?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news_select".
 */
export interface NewsSelect<T extends boolean = true> {
  title?: T;
  heroText?: T;
  heroImage?: T;
  content?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "references_select".
 */
export interface ReferencesSelect<T extends boolean = true> {
  title?: T;
  heroText?: T;
  heroImage?: T;
  content?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  label?: T;
  slug?: T;
  parent?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts_select".
 */
export interface ContactsSelect<T extends boolean = true> {
  name?: T;
  title?: T;
  email?: T;
  phone?: T;
  image?: T;
  categories?: T;
  order?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "front-page".
 */
export interface FrontPage {
  id: number;
  content: (
    | CTABlock
    | LargeFeaturePostBlock
    | SmallFeaturePostsWrapperBlock
    | LinkListBlock
    | ContactPeopleBlock
    | VideoEmbedBlock
    | MediaBlock
    | QuoteBlock
  )[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CTABlock".
 */
export interface CTABlock {
  title: string;
  text?: string | null;
  isExternal?: boolean | null;
  internalUrl?:
    | ({
        relationTo: 'articles';
        value: number | Article;
      } | null)
    | ({
        relationTo: 'collection-pages';
        value: number | CollectionPage;
      } | null)
    | ({
        relationTo: 'news';
        value: number | News;
      } | null)
    | ({
        relationTo: 'references';
        value: number | Reference;
      } | null);
  externalUrl?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'cta';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LargeFeaturePostBlock".
 */
export interface LargeFeaturePostBlock {
  title: string;
  text?: string | null;
  link?: string | null;
  image: number | Media;
  buttonText?: string | null;
  /**
   * YouTube video URL
   */
  video?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'largeFeaturePost';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SmallFeaturePostsWrapperBlock".
 */
export interface SmallFeaturePostsWrapperBlock {
  posts: {
    title: string;
    text?: string | null;
    link?: string | null;
    image: number | Media;
    id?: string | null;
    blockName?: string | null;
    blockType: 'smallFeaturePost';
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'smallFeaturePostsWrapper';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkListBlock".
 */
export interface LinkListBlock {
  links?:
    | {
        isExternal?: boolean | null;
        internalUrl?:
          | ({
              relationTo: 'articles';
              value: number | Article;
            } | null)
          | ({
              relationTo: 'collection-pages';
              value: number | CollectionPage;
            } | null)
          | ({
              relationTo: 'news';
              value: number | News;
            } | null)
          | ({
              relationTo: 'references';
              value: number | Reference;
            } | null);
        externalUrl?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'linkList';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactPeopleBlock".
 */
export interface ContactPeopleBlock {
  contacts: (number | User)[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'contactPeople';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "VideoEmbedBlock".
 */
export interface VideoEmbedBlock {
  title: string;
  description?: string | null;
  youtubeId: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'videoEmbed';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaBlock".
 */
export interface MediaBlock {
  media: number | Media;
  caption?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'media';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "QuoteBlock".
 */
export interface QuoteBlock {
  quote: string;
  author?: string | null;
  /**
   * Author's title or role
   */
  title?: string | null;
  /**
   * Author's image
   */
  image?: (number | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'quote';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "main-menu".
 */
export interface MainMenu {
  id: number;
  items: {
    label: string;
    onlyLabel?: boolean | null;
    link?: {
      isExternal?: boolean | null;
      internalUrl?:
        | ({
            relationTo: 'articles';
            value: number | Article;
          } | null)
        | ({
            relationTo: 'collection-pages';
            value: number | CollectionPage;
          } | null)
        | ({
            relationTo: 'news';
            value: number | News;
          } | null)
        | ({
            relationTo: 'references';
            value: number | Reference;
          } | null);
      externalUrl?: string | null;
    };
    children?:
      | {
          label: string;
          link?: {
            isExternal?: boolean | null;
            internalUrl?:
              | ({
                  relationTo: 'articles';
                  value: number | Article;
                } | null)
              | ({
                  relationTo: 'collection-pages';
                  value: number | CollectionPage;
                } | null)
              | ({
                  relationTo: 'news';
                  value: number | News;
                } | null)
              | ({
                  relationTo: 'references';
                  value: number | Reference;
                } | null);
            externalUrl?: string | null;
          };
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "front-page_select".
 */
export interface FrontPageSelect<T extends boolean = true> {
  content?:
    | T
    | {
        cta?: T | CTABlockSelect<T>;
        largeFeaturePost?: T | LargeFeaturePostBlockSelect<T>;
        smallFeaturePostsWrapper?: T | SmallFeaturePostsWrapperBlockSelect<T>;
        linkList?: T | LinkListBlockSelect<T>;
        contactPeople?: T | ContactPeopleBlockSelect<T>;
        videoEmbed?: T | VideoEmbedBlockSelect<T>;
        media?: T | MediaBlockSelect<T>;
        quote?: T | QuoteBlockSelect<T>;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CTABlock_select".
 */
export interface CTABlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  isExternal?: T;
  internalUrl?: T;
  externalUrl?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LargeFeaturePostBlock_select".
 */
export interface LargeFeaturePostBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  link?: T;
  image?: T;
  buttonText?: T;
  video?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SmallFeaturePostsWrapperBlock_select".
 */
export interface SmallFeaturePostsWrapperBlockSelect<T extends boolean = true> {
  posts?:
    | T
    | {
        smallFeaturePost?:
          | T
          | {
              title?: T;
              text?: T;
              link?: T;
              image?: T;
              id?: T;
              blockName?: T;
            };
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkListBlock_select".
 */
export interface LinkListBlockSelect<T extends boolean = true> {
  links?:
    | T
    | {
        isExternal?: T;
        internalUrl?: T;
        externalUrl?: T;
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactPeopleBlock_select".
 */
export interface ContactPeopleBlockSelect<T extends boolean = true> {
  contacts?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "VideoEmbedBlock_select".
 */
export interface VideoEmbedBlockSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  youtubeId?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaBlock_select".
 */
export interface MediaBlockSelect<T extends boolean = true> {
  media?: T;
  caption?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "QuoteBlock_select".
 */
export interface QuoteBlockSelect<T extends boolean = true> {
  quote?: T;
  author?: T;
  title?: T;
  image?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "main-menu_select".
 */
export interface MainMenuSelect<T extends boolean = true> {
  items?:
    | T
    | {
        label?: T;
        onlyLabel?: T;
        link?:
          | T
          | {
              isExternal?: T;
              internalUrl?: T;
              externalUrl?: T;
            };
        children?:
          | T
          | {
              label?: T;
              link?:
                | T
                | {
                    isExternal?: T;
                    internalUrl?: T;
                    externalUrl?: T;
                  };
              id?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}