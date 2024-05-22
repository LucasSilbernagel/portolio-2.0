export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  GatsbyImageData: any
}

export type File = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type Internal = {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
  contentFilePath?: Maybe<Scalars['String']>
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  graphqlTypegen?: Maybe<SiteGraphqlTypegen>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  jsxRuntime?: Maybe<Scalars['String']>
  trailingSlash?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SiteGraphqlTypegen = {
  typesOutputPath?: Maybe<Scalars['String']>
  generateOnBuild?: Maybe<Scalars['Boolean']>
}

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
}

export type SiteFunction = Node & {
  functionRoute: Scalars['String']
  pluginName: Scalars['String']
  originalAbsoluteFilePath: Scalars['String']
  originalRelativeFilePath: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
  absoluteCompiledFilePath: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SitePage = Node & {
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  pageContext?: Maybe<Scalars['JSON']>
  pluginCreator?: Maybe<SitePlugin>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<Scalars['JSON']>
  packageJson?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityBlock = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  children?: Maybe<Array<Maybe<SanitySpan>>>
  style?: Maybe<Scalars['String']>
  listItem?: Maybe<Scalars['String']>
  level?: Maybe<Scalars['Float']>
  _rawChildren?: Maybe<Scalars['JSON']>
}

export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityCrossDatasetReference = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  _ref?: Maybe<Scalars['String']>
  _weak?: Maybe<Scalars['Boolean']>
  _dataset?: Maybe<Scalars['String']>
  _projectId?: Maybe<Scalars['String']>
}

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  _createdAt?: Maybe<Scalars['Date']>
  _updatedAt?: Maybe<Scalars['Date']>
  _rev?: Maybe<Scalars['String']>
}

export type SanityExperienceItem = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  companyWebsite?: Maybe<Scalars['String']>
  timeframe?: Maybe<SanityTimeframe>
  accomplishments?: Maybe<Array<Maybe<Scalars['String']>>>
  _rawTimeframe?: Maybe<Scalars['JSON']>
}

export type SanityExperienceItem_RawTimeframeArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityFile = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityFileAsset>
  _rawAsset?: Maybe<Scalars['JSON']>
}

export type SanityFile_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityGeopoint = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  alt?: Maybe<Scalars['Float']>
}

export type SanityHomepage = SanityDocument &
  Node & {
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    experience?: Maybe<Array<Maybe<SanityExperienceItem>>>
    aboutMe?: Maybe<Array<Maybe<SanityBlock>>>
    techStack?: Maybe<Array<Maybe<SanityBlock>>>
    _rawAboutMe?: Maybe<Scalars['JSON']>
    _rawTechStack?: Maybe<Scalars['JSON']>
    _rawExperience?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityHomepage_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityHomepage_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityHomepage_RawAboutMeArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityHomepage_RawTechStackArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityHomepage_RawExperienceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImage = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
  _rawAsset?: Maybe<Scalars['JSON']>
  _rawHotspot?: Maybe<Scalars['JSON']>
  _rawCrop?: Maybe<Scalars['JSON']>
}

export type SanityImage_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImage_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImage_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImageSlide = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  image?: Maybe<SanityImage>
  altText?: Maybe<Scalars['String']>
  _rawImage?: Maybe<Scalars['JSON']>
}

export type SanityImageSlide_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityMediaTag = SanityDocument &
  Node & {
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    name?: Maybe<SanitySlug>
    _rawName?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityMediaTag_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityMediaTag_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityMediaTag_RawNameArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityMyStory = SanityDocument &
  Node & {
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    myStoryImageCarousel?: Maybe<Array<Maybe<SanityImageSlide>>>
    aboutMe?: Maybe<Array<Maybe<SanityBlock>>>
    _rawAboutMe?: Maybe<Scalars['JSON']>
    _rawMyStoryImageCarousel?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityMyStory_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityMyStory_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityMyStory_RawAboutMeArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityMyStory_RawMyStoryImageCarouselArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityProject = SanityDocument &
  Node & {
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    year?: Maybe<Scalars['Float']>
    description?: Maybe<Scalars['String']>
    techStack?: Maybe<Array<Maybe<Scalars['String']>>>
    githubProjectLink?: Maybe<Scalars['String']>
    liveLink?: Maybe<Scalars['String']>
    image?: Maybe<SanityImage>
    _rawImage?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityProject_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityProject_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityProject_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityAssetSourceData = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type SanityFileAsset = SanityDocument &
  Node & {
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    originalFilename?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    altText?: Maybe<Scalars['String']>
    sha1hash?: Maybe<Scalars['String']>
    extension?: Maybe<Scalars['String']>
    mimeType?: Maybe<Scalars['String']>
    size?: Maybe<Scalars['Float']>
    assetId?: Maybe<Scalars['String']>
    uploadId?: Maybe<Scalars['String']>
    path?: Maybe<Scalars['String']>
    url?: Maybe<Scalars['String']>
    source?: Maybe<SanityAssetSourceData>
    _rawSource?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityFileAsset_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImageAsset = SanityDocument &
  Node &
  RemoteFile & {
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    originalFilename?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    altText?: Maybe<Scalars['String']>
    sha1hash?: Maybe<Scalars['String']>
    extension?: Maybe<Scalars['String']>
    mimeType: Scalars['String']
    size?: Maybe<Scalars['Float']>
    assetId?: Maybe<Scalars['String']>
    uploadId?: Maybe<Scalars['String']>
    path?: Maybe<Scalars['String']>
    url?: Maybe<Scalars['String']>
    metadata?: Maybe<SanityImageMetadata>
    source?: Maybe<SanityAssetSourceData>
    _rawMetadata?: Maybe<Scalars['JSON']>
    _rawSource?: Maybe<Scalars['JSON']>
    gatsbyImageData: Scalars['GatsbyImageData']
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
    filename: Scalars['String']
    filesize?: Maybe<Scalars['Int']>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    publicUrl: Scalars['String']
    resize?: Maybe<RemoteFileResize>
    /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
    gatsbyImage?: Maybe<Scalars['GatsbyImageData']>
  }

export type SanityImageAsset_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImageAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  aspectRatio?: InputMaybe<Scalars['Float']>
  placeholder?: InputMaybe<SanityGatsbyImagePlaceholder>
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  sizes?: InputMaybe<Scalars['String']>
  backgroundColor?: InputMaybe<Scalars['String']>
  fit?: InputMaybe<SanityImageFit>
}

export type SanityImageAssetResizeArgs = {
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  aspectRatio?: InputMaybe<Scalars['Float']>
  fit?: InputMaybe<RemoteFileFit>
  format?: InputMaybe<RemoteFileFormat>
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>
  quality?: InputMaybe<Scalars['Int']>
}

export type SanityImageAssetGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  placeholder?: InputMaybe<RemoteFilePlaceholder>
  aspectRatio?: InputMaybe<Scalars['Float']>
  formats?: InputMaybe<Array<RemoteFileFormat>>
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  sizes?: InputMaybe<Scalars['String']>
  backgroundColor?: InputMaybe<Scalars['String']>
  fit?: InputMaybe<RemoteFileFit>
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>
  quality?: InputMaybe<Scalars['Int']>
}

/** Remote Interface */
export type RemoteFile = {
  id: Scalars['ID']
  mimeType: Scalars['String']
  filename: Scalars['String']
  filesize?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  publicUrl: Scalars['String']
  resize?: Maybe<RemoteFileResize>
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>
}

/** Remote Interface */
export type RemoteFileResizeArgs = {
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  aspectRatio?: InputMaybe<Scalars['Float']>
  fit?: InputMaybe<RemoteFileFit>
  format?: InputMaybe<RemoteFileFormat>
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>
  quality?: InputMaybe<Scalars['Int']>
}

/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  placeholder?: InputMaybe<RemoteFilePlaceholder>
  aspectRatio?: InputMaybe<Scalars['Float']>
  formats?: InputMaybe<Array<RemoteFileFormat>>
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  sizes?: InputMaybe<Scalars['String']>
  backgroundColor?: InputMaybe<Scalars['String']>
  fit?: InputMaybe<RemoteFileFit>
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>
  quality?: InputMaybe<Scalars['Int']>
}

export type RemoteFileResize = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  src?: Maybe<Scalars['String']>
}

export type RemoteFileFit = 'COVER' | 'FILL' | 'OUTSIDE' | 'CONTAIN'

export type RemoteFileFormat = 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF'

export type RemoteFileCropFocus =
  | 'CENTER'
  | 'TOP'
  | 'RIGHT'
  | 'BOTTOM'
  | 'LEFT'
  | 'ENTROPY'
  | 'EDGES'
  | 'FACES'

export type RemoteFileLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED'

export type RemoteFilePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'TRACED_SVG'
  | 'NONE'

export type SanityGatsbyImagePlaceholder = 'DOMINANT_COLOR' | 'BLURRED' | 'NONE'

export type SanityImageFit =
  | 'CLIP'
  | 'CROP'
  | 'FILL'
  | 'FILLMAX'
  | 'MAX'
  | 'SCALE'
  | 'MIN'

export type SanityImageCrop = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  top?: Maybe<Scalars['Float']>
  bottom?: Maybe<Scalars['Float']>
  left?: Maybe<Scalars['Float']>
  right?: Maybe<Scalars['Float']>
}

export type SanityImageDimensions = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type SanityImageHotspot = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type SanityImageMetadata = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  location?: Maybe<SanityGeopoint>
  dimensions?: Maybe<SanityImageDimensions>
  palette?: Maybe<SanityImagePalette>
  lqip?: Maybe<Scalars['String']>
  blurHash?: Maybe<Scalars['String']>
  hasAlpha?: Maybe<Scalars['Boolean']>
  isOpaque?: Maybe<Scalars['Boolean']>
  _rawLocation?: Maybe<Scalars['JSON']>
  _rawDimensions?: Maybe<Scalars['JSON']>
  _rawPalette?: Maybe<Scalars['JSON']>
}

export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImagePalette = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  darkMuted?: Maybe<SanityImagePaletteSwatch>
  lightVibrant?: Maybe<SanityImagePaletteSwatch>
  darkVibrant?: Maybe<SanityImagePaletteSwatch>
  vibrant?: Maybe<SanityImagePaletteSwatch>
  dominant?: Maybe<SanityImagePaletteSwatch>
  lightMuted?: Maybe<SanityImagePaletteSwatch>
  muted?: Maybe<SanityImagePaletteSwatch>
  _rawDarkMuted?: Maybe<Scalars['JSON']>
  _rawLightVibrant?: Maybe<Scalars['JSON']>
  _rawDarkVibrant?: Maybe<Scalars['JSON']>
  _rawVibrant?: Maybe<Scalars['JSON']>
  _rawDominant?: Maybe<Scalars['JSON']>
  _rawLightMuted?: Maybe<Scalars['JSON']>
  _rawMuted?: Maybe<Scalars['JSON']>
}

export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>
}

export type SanityImagePaletteSwatch = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
  foreground?: Maybe<Scalars['String']>
  population?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
}

export type SanitySlug = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
}

export type SanitySpan = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  marks?: Maybe<Array<Maybe<Scalars['String']>>>
  text?: Maybe<Scalars['String']>
}

export type SanityTimeframe = {
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['Date']>
  endDate?: Maybe<Scalars['Date']>
}

export type SanityTimeframeStartDateArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityTimeframeEndDateArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int']
}

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF'

export type GatsbyImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED'

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE'

export type ImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF'

export type ImageFit = 'COVER' | 'CONTAIN' | 'FILL' | 'INSIDE' | 'OUTSIDE'

export type ImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED'

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION'

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: InputMaybe<Scalars['Int']>
}

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY'

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>
  turdSize?: InputMaybe<Scalars['Float']>
  alphaMax?: InputMaybe<Scalars['Float']>
  optCurve?: InputMaybe<Scalars['Boolean']>
  optTolerance?: InputMaybe<Scalars['Float']>
  threshold?: InputMaybe<Scalars['Int']>
  blackOnWhite?: InputMaybe<Scalars['Boolean']>
  color?: InputMaybe<Scalars['String']>
  background?: InputMaybe<Scalars['String']>
}

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars['GatsbyImageData']
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  base64Width?: InputMaybe<Scalars['Int']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>
  grayscale?: InputMaybe<Scalars['Boolean']>
  duotone?: InputMaybe<DuotoneGradient>
  traceSVG?: InputMaybe<Potrace>
  quality?: InputMaybe<Scalars['Int']>
  jpegQuality?: InputMaybe<Scalars['Int']>
  pngQuality?: InputMaybe<Scalars['Int']>
  webpQuality?: InputMaybe<Scalars['Int']>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
  background?: InputMaybe<Scalars['String']>
  rotate?: InputMaybe<Scalars['Int']>
  trim?: InputMaybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>
  maxHeight?: InputMaybe<Scalars['Int']>
  base64Width?: InputMaybe<Scalars['Int']>
  grayscale?: InputMaybe<Scalars['Boolean']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>
  duotone?: InputMaybe<DuotoneGradient>
  traceSVG?: InputMaybe<Potrace>
  quality?: InputMaybe<Scalars['Int']>
  jpegQuality?: InputMaybe<Scalars['Int']>
  pngQuality?: InputMaybe<Scalars['Int']>
  webpQuality?: InputMaybe<Scalars['Int']>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
  background?: InputMaybe<Scalars['String']>
  rotate?: InputMaybe<Scalars['Int']>
  trim?: InputMaybe<Scalars['Float']>
  sizes?: InputMaybe<Scalars['String']>
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  aspectRatio?: InputMaybe<Scalars['Float']>
  placeholder?: InputMaybe<ImagePlaceholder>
  blurredOptions?: InputMaybe<BlurredOptions>
  tracedSVGOptions?: InputMaybe<Potrace>
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  sizes?: InputMaybe<Scalars['String']>
  quality?: InputMaybe<Scalars['Int']>
  jpgOptions?: InputMaybe<JpgOptions>
  pngOptions?: InputMaybe<PngOptions>
  webpOptions?: InputMaybe<WebPOptions>
  avifOptions?: InputMaybe<AvifOptions>
  transformOptions?: InputMaybe<TransformOptions>
  backgroundColor?: InputMaybe<Scalars['String']>
}

export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  quality?: InputMaybe<Scalars['Int']>
  jpegQuality?: InputMaybe<Scalars['Int']>
  pngQuality?: InputMaybe<Scalars['Int']>
  webpQuality?: InputMaybe<Scalars['Int']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  pngCompressionLevel?: InputMaybe<Scalars['Int']>
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>
  grayscale?: InputMaybe<Scalars['Boolean']>
  duotone?: InputMaybe<DuotoneGradient>
  base64?: InputMaybe<Scalars['Boolean']>
  traceSVG?: InputMaybe<Potrace>
  toFormat?: InputMaybe<ImageFormat>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
  background?: InputMaybe<Scalars['String']>
  rotate?: InputMaybe<Scalars['Int']>
  trim?: InputMaybe<Scalars['Float']>
}

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE'

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>
}

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>
  progressive?: InputMaybe<Scalars['Boolean']>
}

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>
  compressionSpeed?: InputMaybe<Scalars['Int']>
}

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>
}

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>
  lossless?: InputMaybe<Scalars['Boolean']>
  speed?: InputMaybe<Scalars['Int']>
}

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>
  duotone?: InputMaybe<DuotoneGradient>
  rotate?: InputMaybe<Scalars['Int']>
  trim?: InputMaybe<Scalars['Float']>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
}

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type Query = {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  siteFunction?: Maybe<SiteFunction>
  allSiteFunction: SiteFunctionConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sanityHomepage?: Maybe<SanityHomepage>
  allSanityHomepage: SanityHomepageConnection
  sanityMediaTag?: Maybe<SanityMediaTag>
  allSanityMediaTag: SanityMediaTagConnection
  sanityMyStory?: Maybe<SanityMyStory>
  allSanityMyStory: SanityMyStoryConnection
  sanityProject?: Maybe<SanityProject>
  allSanityProject: SanityProjectConnection
  sanityFileAsset?: Maybe<SanityFileAsset>
  allSanityFileAsset: SanityFileAssetConnection
  sanityImageAsset?: Maybe<SanityImageAsset>
  allSanityImageAsset: SanityImageAssetConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  blksize?: InputMaybe<IntQueryOperatorInput>
  blocks?: InputMaybe<IntQueryOperatorInput>
  publicURL?: InputMaybe<StringQueryOperatorInput>
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>
  childImageSharp?: InputMaybe<ImageSharpFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>
  sort?: InputMaybe<FileSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>
  sort?: InputMaybe<DirectorySortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>
  port?: InputMaybe<IntQueryOperatorInput>
  host?: InputMaybe<StringQueryOperatorInput>
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>
  polyfill?: InputMaybe<BooleanQueryOperatorInput>
  pathPrefix?: InputMaybe<StringQueryOperatorInput>
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>
  trailingSlash?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>
  sort?: InputMaybe<SiteSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>
  pluginName?: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>
  sort?: InputMaybe<SiteFunctionSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>
  component?: InputMaybe<StringQueryOperatorInput>
  internalComponentName?: InputMaybe<StringQueryOperatorInput>
  componentChunkName?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  pageContext?: InputMaybe<JsonQueryOperatorInput>
  pluginCreator?: InputMaybe<SitePluginFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>
  sort?: InputMaybe<SitePageSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  version?: InputMaybe<StringQueryOperatorInput>
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>
  browserAPIs?: InputMaybe<StringQueryOperatorInput>
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>
  packageJson?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>
  sort?: InputMaybe<SitePluginSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>
  sort?: InputMaybe<SiteBuildMetadataSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySanityHomepageArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  experience?: InputMaybe<SanityExperienceItemFilterListInput>
  aboutMe?: InputMaybe<SanityBlockFilterListInput>
  techStack?: InputMaybe<SanityBlockFilterListInput>
  _rawAboutMe?: InputMaybe<JsonQueryOperatorInput>
  _rawTechStack?: InputMaybe<JsonQueryOperatorInput>
  _rawExperience?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSanityHomepageArgs = {
  filter?: InputMaybe<SanityHomepageFilterInput>
  sort?: InputMaybe<SanityHomepageSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySanityMediaTagArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<SanitySlugFilterInput>
  _rawName?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSanityMediaTagArgs = {
  filter?: InputMaybe<SanityMediaTagFilterInput>
  sort?: InputMaybe<SanityMediaTagSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySanityMyStoryArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  myStoryImageCarousel?: InputMaybe<SanityImageSlideFilterListInput>
  aboutMe?: InputMaybe<SanityBlockFilterListInput>
  _rawAboutMe?: InputMaybe<JsonQueryOperatorInput>
  _rawMyStoryImageCarousel?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSanityMyStoryArgs = {
  filter?: InputMaybe<SanityMyStoryFilterInput>
  sort?: InputMaybe<SanityMyStorySortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySanityProjectArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  year?: InputMaybe<FloatQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  techStack?: InputMaybe<StringQueryOperatorInput>
  githubProjectLink?: InputMaybe<StringQueryOperatorInput>
  liveLink?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<SanityImageFilterInput>
  _rawImage?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSanityProjectArgs = {
  filter?: InputMaybe<SanityProjectFilterInput>
  sort?: InputMaybe<SanityProjectSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySanityFileAssetArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  originalFilename?: InputMaybe<StringQueryOperatorInput>
  label?: InputMaybe<StringQueryOperatorInput>
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  altText?: InputMaybe<StringQueryOperatorInput>
  sha1hash?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  mimeType?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<FloatQueryOperatorInput>
  assetId?: InputMaybe<StringQueryOperatorInput>
  uploadId?: InputMaybe<StringQueryOperatorInput>
  path?: InputMaybe<StringQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
  source?: InputMaybe<SanityAssetSourceDataFilterInput>
  _rawSource?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSanityFileAssetArgs = {
  filter?: InputMaybe<SanityFileAssetFilterInput>
  sort?: InputMaybe<SanityFileAssetSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySanityImageAssetArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  originalFilename?: InputMaybe<StringQueryOperatorInput>
  label?: InputMaybe<StringQueryOperatorInput>
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  altText?: InputMaybe<StringQueryOperatorInput>
  sha1hash?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  mimeType?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<FloatQueryOperatorInput>
  assetId?: InputMaybe<StringQueryOperatorInput>
  uploadId?: InputMaybe<StringQueryOperatorInput>
  path?: InputMaybe<StringQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
  metadata?: InputMaybe<SanityImageMetadataFilterInput>
  source?: InputMaybe<SanityAssetSourceDataFilterInput>
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>
  _rawSource?: InputMaybe<JsonQueryOperatorInput>
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
  filename?: InputMaybe<StringQueryOperatorInput>
  filesize?: InputMaybe<IntQueryOperatorInput>
  width?: InputMaybe<IntQueryOperatorInput>
  height?: InputMaybe<IntQueryOperatorInput>
  publicUrl?: InputMaybe<StringQueryOperatorInput>
  resize?: InputMaybe<RemoteFileResizeFilterInput>
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>
}

export type QueryAllSanityImageAssetArgs = {
  filter?: InputMaybe<SanityImageAssetFilterInput>
  sort?: InputMaybe<SanityImageAssetSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>
  fluid?: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>
  original?: InputMaybe<ImageSharpOriginalFilterInput>
  resize?: InputMaybe<ImageSharpResizeFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>
  sort?: InputMaybe<ImageSharpSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  regex?: InputMaybe<Scalars['String']>
  glob?: InputMaybe<Scalars['String']>
}

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>
  ne?: InputMaybe<Scalars['Date']>
  gt?: InputMaybe<Scalars['Date']>
  gte?: InputMaybe<Scalars['Date']>
  lt?: InputMaybe<Scalars['Date']>
  lte?: InputMaybe<Scalars['Date']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
}

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>
}

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>
  fluid?: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>
  original?: InputMaybe<ImageSharpOriginalFilterInput>
  resize?: InputMaybe<ImageSharpResizeFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>
  tracedSVG?: InputMaybe<StringQueryOperatorInput>
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
  width?: InputMaybe<FloatQueryOperatorInput>
  height?: InputMaybe<FloatQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
  srcSet?: InputMaybe<StringQueryOperatorInput>
  srcWebp?: InputMaybe<StringQueryOperatorInput>
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>
  originalName?: InputMaybe<StringQueryOperatorInput>
}

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>
  tracedSVG?: InputMaybe<StringQueryOperatorInput>
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
  srcSet?: InputMaybe<StringQueryOperatorInput>
  srcWebp?: InputMaybe<StringQueryOperatorInput>
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>
  sizes?: InputMaybe<StringQueryOperatorInput>
  originalImg?: InputMaybe<StringQueryOperatorInput>
  originalName?: InputMaybe<StringQueryOperatorInput>
  presentationWidth?: InputMaybe<IntQueryOperatorInput>
  presentationHeight?: InputMaybe<IntQueryOperatorInput>
}

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>
  ne?: InputMaybe<Scalars['GatsbyImageData']>
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>
}

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>
  height?: InputMaybe<FloatQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
}

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>
  tracedSVG?: InputMaybe<StringQueryOperatorInput>
  width?: InputMaybe<IntQueryOperatorInput>
  height?: InputMaybe<IntQueryOperatorInput>
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
  originalName?: InputMaybe<StringQueryOperatorInput>
}

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>
}

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>
  contentDigest?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  fieldOwners?: InputMaybe<StringQueryOperatorInput>
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>
  mediaType?: InputMaybe<StringQueryOperatorInput>
  owner?: InputMaybe<StringQueryOperatorInput>
  type?: InputMaybe<StringQueryOperatorInput>
  contentFilePath?: InputMaybe<StringQueryOperatorInput>
}

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
}

export type FileConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___parent___internal___contentFilePath'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___children___internal___contentFilePath'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childrenImageSharp___internal___contentFilePath'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___parent___internal___contentFilePath'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___children___internal___contentFilePath'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childImageSharp___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type FileGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<FileGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  blksize?: InputMaybe<IntQueryOperatorInput>
  blocks?: InputMaybe<IntQueryOperatorInput>
  publicURL?: InputMaybe<StringQueryOperatorInput>
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>
  childImageSharp?: InputMaybe<ImageSharpFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type DirectoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<DirectoryGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<StringQueryOperatorInput>
  siteUrl?: InputMaybe<StringQueryOperatorInput>
}

export type SiteGraphqlTypegenFilterInput = {
  typesOutputPath?: InputMaybe<StringQueryOperatorInput>
  generateOnBuild?: InputMaybe<BooleanQueryOperatorInput>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___image'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'graphqlTypegen___typesOutputPath'
  | 'graphqlTypegen___generateOnBuild'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>
  port?: InputMaybe<IntQueryOperatorInput>
  host?: InputMaybe<StringQueryOperatorInput>
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>
  polyfill?: InputMaybe<BooleanQueryOperatorInput>
  pathPrefix?: InputMaybe<StringQueryOperatorInput>
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>
  trailingSlash?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteFunctionConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteFunctionGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>
  pluginName?: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  regex?: InputMaybe<Scalars['JSON']>
  glob?: InputMaybe<Scalars['JSON']>
}

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  version?: InputMaybe<StringQueryOperatorInput>
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>
  browserAPIs?: InputMaybe<StringQueryOperatorInput>
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>
  packageJson?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___internal___contentFilePath'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___internal___contentFilePath'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePageGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>
  component?: InputMaybe<StringQueryOperatorInput>
  internalComponentName?: InputMaybe<StringQueryOperatorInput>
  componentChunkName?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  pageContext?: InputMaybe<JsonQueryOperatorInput>
  pluginCreator?: InputMaybe<SitePluginFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePluginGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteBuildMetadataGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SanityExperienceItemFilterListInput = {
  elemMatch?: InputMaybe<SanityExperienceItemFilterInput>
}

export type SanityExperienceItemFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  title?: InputMaybe<StringQueryOperatorInput>
  company?: InputMaybe<StringQueryOperatorInput>
  companyWebsite?: InputMaybe<StringQueryOperatorInput>
  timeframe?: InputMaybe<SanityTimeframeFilterInput>
  accomplishments?: InputMaybe<StringQueryOperatorInput>
  _rawTimeframe?: InputMaybe<JsonQueryOperatorInput>
}

export type SanityTimeframeFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  startDate?: InputMaybe<DateQueryOperatorInput>
  endDate?: InputMaybe<DateQueryOperatorInput>
}

export type SanityBlockFilterListInput = {
  elemMatch?: InputMaybe<SanityBlockFilterInput>
}

export type SanityBlockFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  children?: InputMaybe<SanitySpanFilterListInput>
  style?: InputMaybe<StringQueryOperatorInput>
  listItem?: InputMaybe<StringQueryOperatorInput>
  level?: InputMaybe<FloatQueryOperatorInput>
  _rawChildren?: InputMaybe<JsonQueryOperatorInput>
}

export type SanitySpanFilterListInput = {
  elemMatch?: InputMaybe<SanitySpanFilterInput>
}

export type SanitySpanFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  marks?: InputMaybe<StringQueryOperatorInput>
  text?: InputMaybe<StringQueryOperatorInput>
}

export type SanityHomepageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityHomepageEdge>
  nodes: Array<SanityHomepage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityHomepageGroupConnection>
}

export type SanityHomepageConnectionDistinctArgs = {
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageConnectionMaxArgs = {
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageConnectionMinArgs = {
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageConnectionSumArgs = {
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageEdge = {
  next?: Maybe<SanityHomepage>
  node: SanityHomepage
  previous?: Maybe<SanityHomepage>
}

export type SanityHomepageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'experience'
  | 'experience____key'
  | 'experience____type'
  | 'experience___title'
  | 'experience___company'
  | 'experience___companyWebsite'
  | 'experience___timeframe____key'
  | 'experience___timeframe____type'
  | 'experience___timeframe___startDate'
  | 'experience___timeframe___endDate'
  | 'experience___accomplishments'
  | 'experience____rawTimeframe'
  | 'aboutMe'
  | 'aboutMe____key'
  | 'aboutMe____type'
  | 'aboutMe___children'
  | 'aboutMe___children____key'
  | 'aboutMe___children____type'
  | 'aboutMe___children___marks'
  | 'aboutMe___children___text'
  | 'aboutMe___style'
  | 'aboutMe___listItem'
  | 'aboutMe___level'
  | 'aboutMe____rawChildren'
  | 'techStack'
  | 'techStack____key'
  | 'techStack____type'
  | 'techStack___children'
  | 'techStack___children____key'
  | 'techStack___children____type'
  | 'techStack___children___marks'
  | 'techStack___children___text'
  | 'techStack___style'
  | 'techStack___listItem'
  | 'techStack___level'
  | 'techStack____rawChildren'
  | '_rawAboutMe'
  | '_rawTechStack'
  | '_rawExperience'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SanityHomepageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityHomepageEdge>
  nodes: Array<SanityHomepage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityHomepageGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityHomepageGroupConnectionDistinctArgs = {
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageGroupConnectionMaxArgs = {
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageGroupConnectionMinArgs = {
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageGroupConnectionSumArgs = {
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityHomepageFieldsEnum
}

export type SanityHomepageFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  experience?: InputMaybe<SanityExperienceItemFilterListInput>
  aboutMe?: InputMaybe<SanityBlockFilterListInput>
  techStack?: InputMaybe<SanityBlockFilterListInput>
  _rawAboutMe?: InputMaybe<JsonQueryOperatorInput>
  _rawTechStack?: InputMaybe<JsonQueryOperatorInput>
  _rawExperience?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SanityHomepageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityHomepageFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SanitySlugFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  current?: InputMaybe<StringQueryOperatorInput>
  source?: InputMaybe<StringQueryOperatorInput>
}

export type SanityMediaTagConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityMediaTagEdge>
  nodes: Array<SanityMediaTag>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityMediaTagGroupConnection>
}

export type SanityMediaTagConnectionDistinctArgs = {
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagConnectionMaxArgs = {
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagConnectionMinArgs = {
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagConnectionSumArgs = {
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagEdge = {
  next?: Maybe<SanityMediaTag>
  node: SanityMediaTag
  previous?: Maybe<SanityMediaTag>
}

export type SanityMediaTagFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'name____key'
  | 'name____type'
  | 'name___current'
  | 'name___source'
  | '_rawName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SanityMediaTagGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityMediaTagEdge>
  nodes: Array<SanityMediaTag>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityMediaTagGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityMediaTagGroupConnectionDistinctArgs = {
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagGroupConnectionMaxArgs = {
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagGroupConnectionMinArgs = {
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagGroupConnectionSumArgs = {
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityMediaTagFieldsEnum
}

export type SanityMediaTagFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<SanitySlugFilterInput>
  _rawName?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SanityMediaTagSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityMediaTagFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SanityImageSlideFilterListInput = {
  elemMatch?: InputMaybe<SanityImageSlideFilterInput>
}

export type SanityImageSlideFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<SanityImageFilterInput>
  altText?: InputMaybe<StringQueryOperatorInput>
  _rawImage?: InputMaybe<JsonQueryOperatorInput>
}

export type SanityImageFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  asset?: InputMaybe<SanityImageAssetFilterInput>
  hotspot?: InputMaybe<SanityImageHotspotFilterInput>
  crop?: InputMaybe<SanityImageCropFilterInput>
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>
  _rawHotspot?: InputMaybe<JsonQueryOperatorInput>
  _rawCrop?: InputMaybe<JsonQueryOperatorInput>
}

export type SanityImageAssetFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  originalFilename?: InputMaybe<StringQueryOperatorInput>
  label?: InputMaybe<StringQueryOperatorInput>
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  altText?: InputMaybe<StringQueryOperatorInput>
  sha1hash?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  mimeType?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<FloatQueryOperatorInput>
  assetId?: InputMaybe<StringQueryOperatorInput>
  uploadId?: InputMaybe<StringQueryOperatorInput>
  path?: InputMaybe<StringQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
  metadata?: InputMaybe<SanityImageMetadataFilterInput>
  source?: InputMaybe<SanityAssetSourceDataFilterInput>
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>
  _rawSource?: InputMaybe<JsonQueryOperatorInput>
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
  filename?: InputMaybe<StringQueryOperatorInput>
  filesize?: InputMaybe<IntQueryOperatorInput>
  width?: InputMaybe<IntQueryOperatorInput>
  height?: InputMaybe<IntQueryOperatorInput>
  publicUrl?: InputMaybe<StringQueryOperatorInput>
  resize?: InputMaybe<RemoteFileResizeFilterInput>
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>
}

export type SanityImageMetadataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  location?: InputMaybe<SanityGeopointFilterInput>
  dimensions?: InputMaybe<SanityImageDimensionsFilterInput>
  palette?: InputMaybe<SanityImagePaletteFilterInput>
  lqip?: InputMaybe<StringQueryOperatorInput>
  blurHash?: InputMaybe<StringQueryOperatorInput>
  hasAlpha?: InputMaybe<BooleanQueryOperatorInput>
  isOpaque?: InputMaybe<BooleanQueryOperatorInput>
  _rawLocation?: InputMaybe<JsonQueryOperatorInput>
  _rawDimensions?: InputMaybe<JsonQueryOperatorInput>
  _rawPalette?: InputMaybe<JsonQueryOperatorInput>
}

export type SanityGeopointFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  lat?: InputMaybe<FloatQueryOperatorInput>
  lng?: InputMaybe<FloatQueryOperatorInput>
  alt?: InputMaybe<FloatQueryOperatorInput>
}

export type SanityImageDimensionsFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  height?: InputMaybe<FloatQueryOperatorInput>
  width?: InputMaybe<FloatQueryOperatorInput>
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
}

export type SanityImagePaletteFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>
  dominant?: InputMaybe<SanityImagePaletteSwatchFilterInput>
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>
  muted?: InputMaybe<SanityImagePaletteSwatchFilterInput>
  _rawDarkMuted?: InputMaybe<JsonQueryOperatorInput>
  _rawLightVibrant?: InputMaybe<JsonQueryOperatorInput>
  _rawDarkVibrant?: InputMaybe<JsonQueryOperatorInput>
  _rawVibrant?: InputMaybe<JsonQueryOperatorInput>
  _rawDominant?: InputMaybe<JsonQueryOperatorInput>
  _rawLightMuted?: InputMaybe<JsonQueryOperatorInput>
  _rawMuted?: InputMaybe<JsonQueryOperatorInput>
}

export type SanityImagePaletteSwatchFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  background?: InputMaybe<StringQueryOperatorInput>
  foreground?: InputMaybe<StringQueryOperatorInput>
  population?: InputMaybe<FloatQueryOperatorInput>
  title?: InputMaybe<StringQueryOperatorInput>
}

export type SanityAssetSourceDataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
}

export type RemoteFileResizeFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>
  height?: InputMaybe<IntQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
}

export type SanityImageHotspotFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  x?: InputMaybe<FloatQueryOperatorInput>
  y?: InputMaybe<FloatQueryOperatorInput>
  height?: InputMaybe<FloatQueryOperatorInput>
  width?: InputMaybe<FloatQueryOperatorInput>
}

export type SanityImageCropFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  top?: InputMaybe<FloatQueryOperatorInput>
  bottom?: InputMaybe<FloatQueryOperatorInput>
  left?: InputMaybe<FloatQueryOperatorInput>
  right?: InputMaybe<FloatQueryOperatorInput>
}

export type SanityMyStoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityMyStoryEdge>
  nodes: Array<SanityMyStory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityMyStoryGroupConnection>
}

export type SanityMyStoryConnectionDistinctArgs = {
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryConnectionMaxArgs = {
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryConnectionMinArgs = {
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryConnectionSumArgs = {
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryEdge = {
  next?: Maybe<SanityMyStory>
  node: SanityMyStory
  previous?: Maybe<SanityMyStory>
}

export type SanityMyStoryFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'myStoryImageCarousel'
  | 'myStoryImageCarousel____key'
  | 'myStoryImageCarousel____type'
  | 'myStoryImageCarousel___image____key'
  | 'myStoryImageCarousel___image____type'
  | 'myStoryImageCarousel___image___asset____id'
  | 'myStoryImageCarousel___image___asset____type'
  | 'myStoryImageCarousel___image___asset____createdAt'
  | 'myStoryImageCarousel___image___asset____updatedAt'
  | 'myStoryImageCarousel___image___asset____rev'
  | 'myStoryImageCarousel___image___asset____key'
  | 'myStoryImageCarousel___image___asset___originalFilename'
  | 'myStoryImageCarousel___image___asset___label'
  | 'myStoryImageCarousel___image___asset___title'
  | 'myStoryImageCarousel___image___asset___description'
  | 'myStoryImageCarousel___image___asset___altText'
  | 'myStoryImageCarousel___image___asset___sha1hash'
  | 'myStoryImageCarousel___image___asset___extension'
  | 'myStoryImageCarousel___image___asset___mimeType'
  | 'myStoryImageCarousel___image___asset___size'
  | 'myStoryImageCarousel___image___asset___assetId'
  | 'myStoryImageCarousel___image___asset___uploadId'
  | 'myStoryImageCarousel___image___asset___path'
  | 'myStoryImageCarousel___image___asset___url'
  | 'myStoryImageCarousel___image___asset____rawMetadata'
  | 'myStoryImageCarousel___image___asset____rawSource'
  | 'myStoryImageCarousel___image___asset___gatsbyImageData'
  | 'myStoryImageCarousel___image___asset___id'
  | 'myStoryImageCarousel___image___asset___children'
  | 'myStoryImageCarousel___image___asset___filename'
  | 'myStoryImageCarousel___image___asset___filesize'
  | 'myStoryImageCarousel___image___asset___width'
  | 'myStoryImageCarousel___image___asset___height'
  | 'myStoryImageCarousel___image___asset___publicUrl'
  | 'myStoryImageCarousel___image___asset___gatsbyImage'
  | 'myStoryImageCarousel___image___hotspot____key'
  | 'myStoryImageCarousel___image___hotspot____type'
  | 'myStoryImageCarousel___image___hotspot___x'
  | 'myStoryImageCarousel___image___hotspot___y'
  | 'myStoryImageCarousel___image___hotspot___height'
  | 'myStoryImageCarousel___image___hotspot___width'
  | 'myStoryImageCarousel___image___crop____key'
  | 'myStoryImageCarousel___image___crop____type'
  | 'myStoryImageCarousel___image___crop___top'
  | 'myStoryImageCarousel___image___crop___bottom'
  | 'myStoryImageCarousel___image___crop___left'
  | 'myStoryImageCarousel___image___crop___right'
  | 'myStoryImageCarousel___image____rawAsset'
  | 'myStoryImageCarousel___image____rawHotspot'
  | 'myStoryImageCarousel___image____rawCrop'
  | 'myStoryImageCarousel___altText'
  | 'myStoryImageCarousel____rawImage'
  | 'aboutMe'
  | 'aboutMe____key'
  | 'aboutMe____type'
  | 'aboutMe___children'
  | 'aboutMe___children____key'
  | 'aboutMe___children____type'
  | 'aboutMe___children___marks'
  | 'aboutMe___children___text'
  | 'aboutMe___style'
  | 'aboutMe___listItem'
  | 'aboutMe___level'
  | 'aboutMe____rawChildren'
  | '_rawAboutMe'
  | '_rawMyStoryImageCarousel'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SanityMyStoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityMyStoryEdge>
  nodes: Array<SanityMyStory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityMyStoryGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityMyStoryGroupConnectionDistinctArgs = {
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryGroupConnectionMaxArgs = {
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryGroupConnectionMinArgs = {
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryGroupConnectionSumArgs = {
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityMyStoryFieldsEnum
}

export type SanityMyStoryFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  myStoryImageCarousel?: InputMaybe<SanityImageSlideFilterListInput>
  aboutMe?: InputMaybe<SanityBlockFilterListInput>
  _rawAboutMe?: InputMaybe<JsonQueryOperatorInput>
  _rawMyStoryImageCarousel?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SanityMyStorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityMyStoryFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SanityProjectConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityProjectEdge>
  nodes: Array<SanityProject>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityProjectGroupConnection>
}

export type SanityProjectConnectionDistinctArgs = {
  field: SanityProjectFieldsEnum
}

export type SanityProjectConnectionMaxArgs = {
  field: SanityProjectFieldsEnum
}

export type SanityProjectConnectionMinArgs = {
  field: SanityProjectFieldsEnum
}

export type SanityProjectConnectionSumArgs = {
  field: SanityProjectFieldsEnum
}

export type SanityProjectConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityProjectFieldsEnum
}

export type SanityProjectEdge = {
  next?: Maybe<SanityProject>
  node: SanityProject
  previous?: Maybe<SanityProject>
}

export type SanityProjectFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'name'
  | 'year'
  | 'description'
  | 'techStack'
  | 'githubProjectLink'
  | 'liveLink'
  | 'image____key'
  | 'image____type'
  | 'image___asset____id'
  | 'image___asset____type'
  | 'image___asset____createdAt'
  | 'image___asset____updatedAt'
  | 'image___asset____rev'
  | 'image___asset____key'
  | 'image___asset___originalFilename'
  | 'image___asset___label'
  | 'image___asset___title'
  | 'image___asset___description'
  | 'image___asset___altText'
  | 'image___asset___sha1hash'
  | 'image___asset___extension'
  | 'image___asset___mimeType'
  | 'image___asset___size'
  | 'image___asset___assetId'
  | 'image___asset___uploadId'
  | 'image___asset___path'
  | 'image___asset___url'
  | 'image___asset___metadata____key'
  | 'image___asset___metadata____type'
  | 'image___asset___metadata___lqip'
  | 'image___asset___metadata___blurHash'
  | 'image___asset___metadata___hasAlpha'
  | 'image___asset___metadata___isOpaque'
  | 'image___asset___metadata____rawLocation'
  | 'image___asset___metadata____rawDimensions'
  | 'image___asset___metadata____rawPalette'
  | 'image___asset___source____key'
  | 'image___asset___source____type'
  | 'image___asset___source___name'
  | 'image___asset___source___id'
  | 'image___asset___source___url'
  | 'image___asset____rawMetadata'
  | 'image___asset____rawSource'
  | 'image___asset___gatsbyImageData'
  | 'image___asset___id'
  | 'image___asset___parent___id'
  | 'image___asset___parent___children'
  | 'image___asset___children'
  | 'image___asset___children___id'
  | 'image___asset___children___children'
  | 'image___asset___internal___content'
  | 'image___asset___internal___contentDigest'
  | 'image___asset___internal___description'
  | 'image___asset___internal___fieldOwners'
  | 'image___asset___internal___ignoreType'
  | 'image___asset___internal___mediaType'
  | 'image___asset___internal___owner'
  | 'image___asset___internal___type'
  | 'image___asset___internal___contentFilePath'
  | 'image___asset___filename'
  | 'image___asset___filesize'
  | 'image___asset___width'
  | 'image___asset___height'
  | 'image___asset___publicUrl'
  | 'image___asset___resize___width'
  | 'image___asset___resize___height'
  | 'image___asset___resize___src'
  | 'image___asset___gatsbyImage'
  | 'image___hotspot____key'
  | 'image___hotspot____type'
  | 'image___hotspot___x'
  | 'image___hotspot___y'
  | 'image___hotspot___height'
  | 'image___hotspot___width'
  | 'image___crop____key'
  | 'image___crop____type'
  | 'image___crop___top'
  | 'image___crop___bottom'
  | 'image___crop___left'
  | 'image___crop___right'
  | 'image____rawAsset'
  | 'image____rawHotspot'
  | 'image____rawCrop'
  | '_rawImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SanityProjectGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityProjectEdge>
  nodes: Array<SanityProject>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityProjectGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityProjectGroupConnectionDistinctArgs = {
  field: SanityProjectFieldsEnum
}

export type SanityProjectGroupConnectionMaxArgs = {
  field: SanityProjectFieldsEnum
}

export type SanityProjectGroupConnectionMinArgs = {
  field: SanityProjectFieldsEnum
}

export type SanityProjectGroupConnectionSumArgs = {
  field: SanityProjectFieldsEnum
}

export type SanityProjectGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityProjectFieldsEnum
}

export type SanityProjectFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  year?: InputMaybe<FloatQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  techStack?: InputMaybe<StringQueryOperatorInput>
  githubProjectLink?: InputMaybe<StringQueryOperatorInput>
  liveLink?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<SanityImageFilterInput>
  _rawImage?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SanityProjectSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityProjectFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SanityFileAssetConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityFileAssetEdge>
  nodes: Array<SanityFileAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityFileAssetGroupConnection>
}

export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetEdge = {
  next?: Maybe<SanityFileAsset>
  node: SanityFileAsset
  previous?: Maybe<SanityFileAsset>
}

export type SanityFileAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'uploadId'
  | 'path'
  | 'url'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawSource'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type SanityFileAssetGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityFileAssetEdge>
  nodes: Array<SanityFileAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityFileAssetGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>
  _type?: InputMaybe<StringQueryOperatorInput>
  _createdAt?: InputMaybe<DateQueryOperatorInput>
  _updatedAt?: InputMaybe<DateQueryOperatorInput>
  _rev?: InputMaybe<StringQueryOperatorInput>
  _key?: InputMaybe<StringQueryOperatorInput>
  originalFilename?: InputMaybe<StringQueryOperatorInput>
  label?: InputMaybe<StringQueryOperatorInput>
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  altText?: InputMaybe<StringQueryOperatorInput>
  sha1hash?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  mimeType?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<FloatQueryOperatorInput>
  assetId?: InputMaybe<StringQueryOperatorInput>
  uploadId?: InputMaybe<StringQueryOperatorInput>
  path?: InputMaybe<StringQueryOperatorInput>
  url?: InputMaybe<StringQueryOperatorInput>
  source?: InputMaybe<SanityAssetSourceDataFilterInput>
  _rawSource?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SanityFileAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityFileAssetFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SanityImageAssetConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityImageAssetEdge>
  nodes: Array<SanityImageAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityImageAssetGroupConnection>
}

export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetEdge = {
  next?: Maybe<SanityImageAsset>
  node: SanityImageAsset
  previous?: Maybe<SanityImageAsset>
}

export type SanityImageAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'uploadId'
  | 'path'
  | 'url'
  | 'metadata____key'
  | 'metadata____type'
  | 'metadata___location____key'
  | 'metadata___location____type'
  | 'metadata___location___lat'
  | 'metadata___location___lng'
  | 'metadata___location___alt'
  | 'metadata___dimensions____key'
  | 'metadata___dimensions____type'
  | 'metadata___dimensions___height'
  | 'metadata___dimensions___width'
  | 'metadata___dimensions___aspectRatio'
  | 'metadata___palette____key'
  | 'metadata___palette____type'
  | 'metadata___palette___darkMuted____key'
  | 'metadata___palette___darkMuted____type'
  | 'metadata___palette___darkMuted___background'
  | 'metadata___palette___darkMuted___foreground'
  | 'metadata___palette___darkMuted___population'
  | 'metadata___palette___darkMuted___title'
  | 'metadata___palette___lightVibrant____key'
  | 'metadata___palette___lightVibrant____type'
  | 'metadata___palette___lightVibrant___background'
  | 'metadata___palette___lightVibrant___foreground'
  | 'metadata___palette___lightVibrant___population'
  | 'metadata___palette___lightVibrant___title'
  | 'metadata___palette___darkVibrant____key'
  | 'metadata___palette___darkVibrant____type'
  | 'metadata___palette___darkVibrant___background'
  | 'metadata___palette___darkVibrant___foreground'
  | 'metadata___palette___darkVibrant___population'
  | 'metadata___palette___darkVibrant___title'
  | 'metadata___palette___vibrant____key'
  | 'metadata___palette___vibrant____type'
  | 'metadata___palette___vibrant___background'
  | 'metadata___palette___vibrant___foreground'
  | 'metadata___palette___vibrant___population'
  | 'metadata___palette___vibrant___title'
  | 'metadata___palette___dominant____key'
  | 'metadata___palette___dominant____type'
  | 'metadata___palette___dominant___background'
  | 'metadata___palette___dominant___foreground'
  | 'metadata___palette___dominant___population'
  | 'metadata___palette___dominant___title'
  | 'metadata___palette___lightMuted____key'
  | 'metadata___palette___lightMuted____type'
  | 'metadata___palette___lightMuted___background'
  | 'metadata___palette___lightMuted___foreground'
  | 'metadata___palette___lightMuted___population'
  | 'metadata___palette___lightMuted___title'
  | 'metadata___palette___muted____key'
  | 'metadata___palette___muted____type'
  | 'metadata___palette___muted___background'
  | 'metadata___palette___muted___foreground'
  | 'metadata___palette___muted___population'
  | 'metadata___palette___muted___title'
  | 'metadata___palette____rawDarkMuted'
  | 'metadata___palette____rawLightVibrant'
  | 'metadata___palette____rawDarkVibrant'
  | 'metadata___palette____rawVibrant'
  | 'metadata___palette____rawDominant'
  | 'metadata___palette____rawLightMuted'
  | 'metadata___palette____rawMuted'
  | 'metadata___lqip'
  | 'metadata___blurHash'
  | 'metadata___hasAlpha'
  | 'metadata___isOpaque'
  | 'metadata____rawLocation'
  | 'metadata____rawDimensions'
  | 'metadata____rawPalette'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawMetadata'
  | '_rawSource'
  | 'gatsbyImageData'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'
  | 'filename'
  | 'filesize'
  | 'width'
  | 'height'
  | 'publicUrl'
  | 'resize___width'
  | 'resize___height'
  | 'resize___src'
  | 'gatsbyImage'

export type SanityImageAssetGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SanityImageAssetEdge>
  nodes: Array<SanityImageAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SanityImageAssetGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityImageAssetFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ImageSharpConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath'

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ImageSharpGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type AboutMeQueryVariables = Exact<{ [key: string]: never }>

export type AboutMeQuery = {
  sanityHomepage?: { _rawAboutMe?: any | null } | null
}

export type ExperienceQueryVariables = Exact<{ [key: string]: never }>

export type ExperienceQuery = {
  sanityHomepage?: {
    experience?: Array<{
      _key?: string | null
      title?: string | null
      company?: string | null
      companyWebsite?: string | null
      accomplishments?: Array<string | null> | null
      timeframe?: { startDate?: any | null; endDate?: any | null } | null
    } | null> | null
  } | null
}

export type MyStoryQueryVariables = Exact<{ [key: string]: never }>

export type MyStoryQuery = {
  sanityMyStory?: {
    _rawAboutMe?: any | null
    myStoryImageCarousel?: Array<{
      altText?: string | null
      image?: { asset?: { gatsbyImageData: any } | null } | null
    } | null> | null
  } | null
}

export type ProjectArchiveQueryVariables = Exact<{ [key: string]: never }>

export type ProjectArchiveQuery = {
  allSanityProject: {
    nodes: Array<{
      name?: string | null
      year?: number | null
      description?: string | null
      techStack?: Array<string | null> | null
      githubProjectLink?: string | null
      liveLink?: string | null
    }>
  }
}

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>

export type ProjectsQuery = {
  allSanityProject: {
    nodes: Array<{
      name?: string | null
      year?: number | null
      description?: string | null
      techStack?: Array<string | null> | null
      githubProjectLink?: string | null
      liveLink?: string | null
      image?: { asset?: { gatsbyImageData: any } | null } | null
    }>
  }
}

export type TechStackQueryVariables = Exact<{ [key: string]: never }>

export type TechStackQuery = {
  sanityHomepage?: { _rawTechStack?: any | null } | null
}

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never }>

export type SiteMetadataQuery = {
  site?: {
    pathPrefix?: string | null
    siteMetadata?: {
      title?: string | null
      description?: string | null
      siteUrl?: string | null
    } | null
  } | null
}

export type GatsbyImageSharpFixedFragment = {
  base64?: string | null
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  tracedSVG?: string | null
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_WithWebpFragment = {
  base64?: string | null
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
}

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | null
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
}

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
}

export type GatsbyImageSharpFluidFragment = {
  base64?: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  maxHeight: number
  maxWidth: number
}

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  tracedSVG?: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebpFragment = {
  base64?: string | null
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | null
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
  sizes: string
}

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
  sizes: string
}
