// flow-typed signature: 95f42a287d803459292851bd43c6557b
// flow-typed version: 5a27c71dcd/query-string_v6.x.x/flow_>=v0.32.x

declare module 'query-string' {
  declare type ArrayFormat = 'none' | 'bracket' | 'index'
  declare type ParseOptions = {|
    arrayFormat?: ArrayFormat,
  |}

  declare type StringifyOptions = {|
    arrayFormat?: ArrayFormat,
    encode?: boolean,
    strict?: boolean,
    sort?: false | <A, B>(A, B) => number,
  |}

  declare type ObjectParameter = string | number | boolean | null | void;

  declare type ObjectParameters = $ReadOnly<{
    [string]: ObjectParameter | $ReadOnlyArray<ObjectParameter>
  }>

  declare type QueryParameters = {
    [string]: string | Array<string> | null
  }

  declare module.exports: {
    extract(str: string): string,
    parse(str: string, opts?: ParseOptions): QueryParameters,
    parseUrl(str: string, opts?: ParseOptions): { url: string, query: QueryParameters },
    stringify(obj: ObjectParameters, opts?: StringifyOptions): string,
  }
}
