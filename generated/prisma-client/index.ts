// Code generated by Prisma (prisma@1.21.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  article: (where?: ArticleWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  article: (where: ArticleWhereUniqueInput) => ArticlePromise;
  articles: (
    args?: {
      where?: ArticleWhereInput;
      orderBy?: ArticleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Article>;
  articlesConnection: (
    args?: {
      where?: ArticleWhereInput;
      orderBy?: ArticleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ArticleConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createArticle: (data: ArticleCreateInput) => ArticlePromise;
  updateArticle: (
    args: { data: ArticleUpdateInput; where: ArticleWhereUniqueInput }
  ) => ArticlePromise;
  updateManyArticles: (
    args: { data: ArticleUpdateManyMutationInput; where?: ArticleWhereInput }
  ) => BatchPayloadPromise;
  upsertArticle: (
    args: {
      where: ArticleWhereUniqueInput;
      create: ArticleCreateInput;
      update: ArticleUpdateInput;
    }
  ) => ArticlePromise;
  deleteArticle: (where: ArticleWhereUniqueInput) => ArticlePromise;
  deleteManyArticles: (where?: ArticleWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  article: (
    where?: ArticleSubscriptionWhereInput
  ) => ArticleSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ArticleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "slug_ASC"
  | "slug_DESC"
  | "description_ASC"
  | "description_DESC"
  | "body_ASC"
  | "body_DESC"
  | "favorited_ASC"
  | "favorited_DESC"
  | "favoritesCount_ASC"
  | "favoritesCount_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC"
  | "hashedPassword_ASC"
  | "hashedPassword_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ArticleCreateInput {
  title: String;
  slug?: String;
  description?: String;
  body?: String;
  tagList?: ArticleCreatetagListInput;
  favorited?: Boolean;
  favoritesCount?: Int;
  author: UserCreateOneInput;
}

export type ArticleWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserCreateInput {
  username: String;
  hashedPassword: String;
}

export interface UserUpdateDataInput {
  username?: String;
  hashedPassword?: String;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  hashedPassword?: String;
  hashedPassword_not?: String;
  hashedPassword_in?: String[] | String;
  hashedPassword_not_in?: String[] | String;
  hashedPassword_lt?: String;
  hashedPassword_lte?: String;
  hashedPassword_gt?: String;
  hashedPassword_gte?: String;
  hashedPassword_contains?: String;
  hashedPassword_not_contains?: String;
  hashedPassword_starts_with?: String;
  hashedPassword_not_starts_with?: String;
  hashedPassword_ends_with?: String;
  hashedPassword_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface ArticleSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ArticleWhereInput;
  AND?: ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput;
  OR?: ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput;
  NOT?: ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput;
}

export interface UserUpdateInput {
  username?: String;
  hashedPassword?: String;
}

export interface ArticleCreatetagListInput {
  set?: String[] | String;
}

export interface ArticleUpdateInput {
  title?: String;
  slug?: String;
  description?: String;
  body?: String;
  tagList?: ArticleUpdatetagListInput;
  favorited?: Boolean;
  favoritesCount?: Int;
  author?: UserUpdateOneRequiredInput;
}

export interface ArticleUpdatetagListInput {
  set?: String[] | String;
}

export interface ArticleUpdateManyMutationInput {
  title?: String;
  slug?: String;
  description?: String;
  body?: String;
  tagList?: ArticleUpdatetagListInput;
  favorited?: Boolean;
  favoritesCount?: Int;
}

export interface UserUpdateManyMutationInput {
  username?: String;
  hashedPassword?: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface ArticleWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  body?: String;
  body_not?: String;
  body_in?: String[] | String;
  body_not_in?: String[] | String;
  body_lt?: String;
  body_lte?: String;
  body_gt?: String;
  body_gte?: String;
  body_contains?: String;
  body_not_contains?: String;
  body_starts_with?: String;
  body_not_starts_with?: String;
  body_ends_with?: String;
  body_not_ends_with?: String;
  favorited?: Boolean;
  favorited_not?: Boolean;
  favoritesCount?: Int;
  favoritesCount_not?: Int;
  favoritesCount_in?: Int[] | Int;
  favoritesCount_not_in?: Int[] | Int;
  favoritesCount_lt?: Int;
  favoritesCount_lte?: Int;
  favoritesCount_gt?: Int;
  favoritesCount_gte?: Int;
  author?: UserWhereInput;
  AND?: ArticleWhereInput[] | ArticleWhereInput;
  OR?: ArticleWhereInput[] | ArticleWhereInput;
  NOT?: ArticleWhereInput[] | ArticleWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  username: String;
  hashedPassword: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  hashedPassword: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  hashedPassword: () => Promise<AsyncIterator<String>>;
}

export interface ArticleEdge {
  cursor: String;
}

export interface ArticleEdgePromise extends Promise<ArticleEdge>, Fragmentable {
  node: <T = ArticlePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ArticleEdgeSubscription
  extends Promise<AsyncIterator<ArticleEdge>>,
    Fragmentable {
  node: <T = ArticleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  username: String;
  hashedPassword: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  hashedPassword: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  hashedPassword: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ArticleConnection {}

export interface ArticleConnectionPromise
  extends Promise<ArticleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ArticleEdge>>() => T;
  aggregate: <T = AggregateArticlePromise>() => T;
}

export interface ArticleConnectionSubscription
  extends Promise<AsyncIterator<ArticleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ArticleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateArticleSubscription>() => T;
}

export interface UserConnection {}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface Article {
  id: ID_Output;
  title: String;
  slug?: String;
  description?: String;
  body?: String;
  tagList: String[];
  favorited?: Boolean;
  favoritesCount?: Int;
}

export interface ArticlePromise extends Promise<Article>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  slug: () => Promise<String>;
  description: () => Promise<String>;
  body: () => Promise<String>;
  tagList: () => Promise<String[]>;
  favorited: () => Promise<Boolean>;
  favoritesCount: () => Promise<Int>;
  author: <T = UserPromise>() => T;
}

export interface ArticleSubscription
  extends Promise<AsyncIterator<Article>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  slug: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
  tagList: () => Promise<AsyncIterator<String[]>>;
  favorited: () => Promise<AsyncIterator<Boolean>>;
  favoritesCount: () => Promise<AsyncIterator<Int>>;
  author: <T = UserSubscription>() => T;
}

export interface AggregateArticle {
  count: Int;
}

export interface AggregateArticlePromise
  extends Promise<AggregateArticle>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateArticleSubscription
  extends Promise<AsyncIterator<AggregateArticle>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface ArticlePreviousValues {
  id: ID_Output;
  title: String;
  slug?: String;
  description?: String;
  body?: String;
  tagList: String[];
  favorited?: Boolean;
  favoritesCount?: Int;
}

export interface ArticlePreviousValuesPromise
  extends Promise<ArticlePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  slug: () => Promise<String>;
  description: () => Promise<String>;
  body: () => Promise<String>;
  tagList: () => Promise<String[]>;
  favorited: () => Promise<Boolean>;
  favoritesCount: () => Promise<Int>;
}

export interface ArticlePreviousValuesSubscription
  extends Promise<AsyncIterator<ArticlePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  slug: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
  tagList: () => Promise<AsyncIterator<String[]>>;
  favorited: () => Promise<AsyncIterator<Boolean>>;
  favoritesCount: () => Promise<AsyncIterator<Int>>;
}

export interface ArticleSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ArticleSubscriptionPayloadPromise
  extends Promise<ArticleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ArticlePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ArticlePreviousValuesPromise>() => T;
}

export interface ArticleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ArticleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ArticleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ArticlePreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserEdge {
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Article",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
