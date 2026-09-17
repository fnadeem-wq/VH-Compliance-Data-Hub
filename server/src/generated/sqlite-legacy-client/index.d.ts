
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model SourceSystem
 * 
 */
export type SourceSystem = $Result.DefaultSelection<Prisma.$SourceSystemPayload>
/**
 * Model ColumnMapping
 * 
 */
export type ColumnMapping = $Result.DefaultSelection<Prisma.$ColumnMappingPayload>
/**
 * Model UploadBatch
 * 
 */
export type UploadBatch = $Result.DefaultSelection<Prisma.$UploadBatchPayload>
/**
 * Model StandardizedRecord
 * 
 */
export type StandardizedRecord = $Result.DefaultSelection<Prisma.$StandardizedRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.sourceSystem`: Exposes CRUD operations for the **SourceSystem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceSystems
    * const sourceSystems = await prisma.sourceSystem.findMany()
    * ```
    */
  get sourceSystem(): Prisma.SourceSystemDelegate<ExtArgs>;

  /**
   * `prisma.columnMapping`: Exposes CRUD operations for the **ColumnMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ColumnMappings
    * const columnMappings = await prisma.columnMapping.findMany()
    * ```
    */
  get columnMapping(): Prisma.ColumnMappingDelegate<ExtArgs>;

  /**
   * `prisma.uploadBatch`: Exposes CRUD operations for the **UploadBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadBatches
    * const uploadBatches = await prisma.uploadBatch.findMany()
    * ```
    */
  get uploadBatch(): Prisma.UploadBatchDelegate<ExtArgs>;

  /**
   * `prisma.standardizedRecord`: Exposes CRUD operations for the **StandardizedRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StandardizedRecords
    * const standardizedRecords = await prisma.standardizedRecord.findMany()
    * ```
    */
  get standardizedRecord(): Prisma.StandardizedRecordDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Client: 'Client',
    SourceSystem: 'SourceSystem',
    ColumnMapping: 'ColumnMapping',
    UploadBatch: 'UploadBatch',
    StandardizedRecord: 'StandardizedRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "client" | "sourceSystem" | "columnMapping" | "uploadBatch" | "standardizedRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      SourceSystem: {
        payload: Prisma.$SourceSystemPayload<ExtArgs>
        fields: Prisma.SourceSystemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceSystemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceSystemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload>
          }
          findFirst: {
            args: Prisma.SourceSystemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceSystemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload>
          }
          findMany: {
            args: Prisma.SourceSystemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload>[]
          }
          create: {
            args: Prisma.SourceSystemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload>
          }
          createMany: {
            args: Prisma.SourceSystemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceSystemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload>[]
          }
          delete: {
            args: Prisma.SourceSystemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload>
          }
          update: {
            args: Prisma.SourceSystemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload>
          }
          deleteMany: {
            args: Prisma.SourceSystemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceSystemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SourceSystemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceSystemPayload>
          }
          aggregate: {
            args: Prisma.SourceSystemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceSystem>
          }
          groupBy: {
            args: Prisma.SourceSystemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceSystemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceSystemCountArgs<ExtArgs>
            result: $Utils.Optional<SourceSystemCountAggregateOutputType> | number
          }
        }
      }
      ColumnMapping: {
        payload: Prisma.$ColumnMappingPayload<ExtArgs>
        fields: Prisma.ColumnMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColumnMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload>
          }
          findFirst: {
            args: Prisma.ColumnMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload>
          }
          findMany: {
            args: Prisma.ColumnMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload>[]
          }
          create: {
            args: Prisma.ColumnMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload>
          }
          createMany: {
            args: Prisma.ColumnMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColumnMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload>[]
          }
          delete: {
            args: Prisma.ColumnMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload>
          }
          update: {
            args: Prisma.ColumnMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload>
          }
          deleteMany: {
            args: Prisma.ColumnMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ColumnMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMappingPayload>
          }
          aggregate: {
            args: Prisma.ColumnMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumnMapping>
          }
          groupBy: {
            args: Prisma.ColumnMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColumnMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnMappingCountArgs<ExtArgs>
            result: $Utils.Optional<ColumnMappingCountAggregateOutputType> | number
          }
        }
      }
      UploadBatch: {
        payload: Prisma.$UploadBatchPayload<ExtArgs>
        fields: Prisma.UploadBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload>
          }
          findFirst: {
            args: Prisma.UploadBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload>
          }
          findMany: {
            args: Prisma.UploadBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload>[]
          }
          create: {
            args: Prisma.UploadBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload>
          }
          createMany: {
            args: Prisma.UploadBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload>[]
          }
          delete: {
            args: Prisma.UploadBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload>
          }
          update: {
            args: Prisma.UploadBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload>
          }
          deleteMany: {
            args: Prisma.UploadBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UploadBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadBatchPayload>
          }
          aggregate: {
            args: Prisma.UploadBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadBatch>
          }
          groupBy: {
            args: Prisma.UploadBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadBatchCountArgs<ExtArgs>
            result: $Utils.Optional<UploadBatchCountAggregateOutputType> | number
          }
        }
      }
      StandardizedRecord: {
        payload: Prisma.$StandardizedRecordPayload<ExtArgs>
        fields: Prisma.StandardizedRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StandardizedRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StandardizedRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload>
          }
          findFirst: {
            args: Prisma.StandardizedRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StandardizedRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload>
          }
          findMany: {
            args: Prisma.StandardizedRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload>[]
          }
          create: {
            args: Prisma.StandardizedRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload>
          }
          createMany: {
            args: Prisma.StandardizedRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StandardizedRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload>[]
          }
          delete: {
            args: Prisma.StandardizedRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload>
          }
          update: {
            args: Prisma.StandardizedRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload>
          }
          deleteMany: {
            args: Prisma.StandardizedRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StandardizedRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StandardizedRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardizedRecordPayload>
          }
          aggregate: {
            args: Prisma.StandardizedRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStandardizedRecord>
          }
          groupBy: {
            args: Prisma.StandardizedRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<StandardizedRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.StandardizedRecordCountArgs<ExtArgs>
            result: $Utils.Optional<StandardizedRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    sourceSystems: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceSystems?: boolean | ClientCountOutputTypeCountSourceSystemsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSourceSystemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceSystemWhereInput
  }


  /**
   * Count Type SourceSystemCountOutputType
   */

  export type SourceSystemCountOutputType = {
    columnMappings: number
    uploadBatches: number
  }

  export type SourceSystemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columnMappings?: boolean | SourceSystemCountOutputTypeCountColumnMappingsArgs
    uploadBatches?: boolean | SourceSystemCountOutputTypeCountUploadBatchesArgs
  }

  // Custom InputTypes
  /**
   * SourceSystemCountOutputType without action
   */
  export type SourceSystemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystemCountOutputType
     */
    select?: SourceSystemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceSystemCountOutputType without action
   */
  export type SourceSystemCountOutputTypeCountColumnMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnMappingWhereInput
  }

  /**
   * SourceSystemCountOutputType without action
   */
  export type SourceSystemCountOutputTypeCountUploadBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadBatchWhereInput
  }


  /**
   * Count Type UploadBatchCountOutputType
   */

  export type UploadBatchCountOutputType = {
    records: number
  }

  export type UploadBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | UploadBatchCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * UploadBatchCountOutputType without action
   */
  export type UploadBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatchCountOutputType
     */
    select?: UploadBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UploadBatchCountOutputType without action
   */
  export type UploadBatchCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandardizedRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    sourceSystems?: boolean | Client$sourceSystemsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceSystems?: boolean | Client$sourceSystemsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      sourceSystems: Prisma.$SourceSystemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceSystems<T extends Client$sourceSystemsArgs<ExtArgs> = {}>(args?: Subset<T, Client$sourceSystemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.sourceSystems
   */
  export type Client$sourceSystemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    where?: SourceSystemWhereInput
    orderBy?: SourceSystemOrderByWithRelationInput | SourceSystemOrderByWithRelationInput[]
    cursor?: SourceSystemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceSystemScalarFieldEnum | SourceSystemScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model SourceSystem
   */

  export type AggregateSourceSystem = {
    _count: SourceSystemCountAggregateOutputType | null
    _avg: SourceSystemAvgAggregateOutputType | null
    _sum: SourceSystemSumAggregateOutputType | null
    _min: SourceSystemMinAggregateOutputType | null
    _max: SourceSystemMaxAggregateOutputType | null
  }

  export type SourceSystemAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type SourceSystemSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type SourceSystemMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    name: string | null
    createdAt: Date | null
  }

  export type SourceSystemMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    name: string | null
    createdAt: Date | null
  }

  export type SourceSystemCountAggregateOutputType = {
    id: number
    clientId: number
    name: number
    createdAt: number
    _all: number
  }


  export type SourceSystemAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type SourceSystemSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type SourceSystemMinAggregateInputType = {
    id?: true
    clientId?: true
    name?: true
    createdAt?: true
  }

  export type SourceSystemMaxAggregateInputType = {
    id?: true
    clientId?: true
    name?: true
    createdAt?: true
  }

  export type SourceSystemCountAggregateInputType = {
    id?: true
    clientId?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type SourceSystemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceSystem to aggregate.
     */
    where?: SourceSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceSystems to fetch.
     */
    orderBy?: SourceSystemOrderByWithRelationInput | SourceSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceSystems
    **/
    _count?: true | SourceSystemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceSystemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceSystemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceSystemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceSystemMaxAggregateInputType
  }

  export type GetSourceSystemAggregateType<T extends SourceSystemAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceSystem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceSystem[P]>
      : GetScalarType<T[P], AggregateSourceSystem[P]>
  }




  export type SourceSystemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceSystemWhereInput
    orderBy?: SourceSystemOrderByWithAggregationInput | SourceSystemOrderByWithAggregationInput[]
    by: SourceSystemScalarFieldEnum[] | SourceSystemScalarFieldEnum
    having?: SourceSystemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceSystemCountAggregateInputType | true
    _avg?: SourceSystemAvgAggregateInputType
    _sum?: SourceSystemSumAggregateInputType
    _min?: SourceSystemMinAggregateInputType
    _max?: SourceSystemMaxAggregateInputType
  }

  export type SourceSystemGroupByOutputType = {
    id: number
    clientId: number
    name: string
    createdAt: Date
    _count: SourceSystemCountAggregateOutputType | null
    _avg: SourceSystemAvgAggregateOutputType | null
    _sum: SourceSystemSumAggregateOutputType | null
    _min: SourceSystemMinAggregateOutputType | null
    _max: SourceSystemMaxAggregateOutputType | null
  }

  type GetSourceSystemGroupByPayload<T extends SourceSystemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceSystemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceSystemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceSystemGroupByOutputType[P]>
            : GetScalarType<T[P], SourceSystemGroupByOutputType[P]>
        }
      >
    >


  export type SourceSystemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    name?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    columnMappings?: boolean | SourceSystem$columnMappingsArgs<ExtArgs>
    uploadBatches?: boolean | SourceSystem$uploadBatchesArgs<ExtArgs>
    _count?: boolean | SourceSystemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceSystem"]>

  export type SourceSystemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    name?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceSystem"]>

  export type SourceSystemSelectScalar = {
    id?: boolean
    clientId?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type SourceSystemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    columnMappings?: boolean | SourceSystem$columnMappingsArgs<ExtArgs>
    uploadBatches?: boolean | SourceSystem$uploadBatchesArgs<ExtArgs>
    _count?: boolean | SourceSystemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceSystemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $SourceSystemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceSystem"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      columnMappings: Prisma.$ColumnMappingPayload<ExtArgs>[]
      uploadBatches: Prisma.$UploadBatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["sourceSystem"]>
    composites: {}
  }

  type SourceSystemGetPayload<S extends boolean | null | undefined | SourceSystemDefaultArgs> = $Result.GetResult<Prisma.$SourceSystemPayload, S>

  type SourceSystemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SourceSystemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SourceSystemCountAggregateInputType | true
    }

  export interface SourceSystemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceSystem'], meta: { name: 'SourceSystem' } }
    /**
     * Find zero or one SourceSystem that matches the filter.
     * @param {SourceSystemFindUniqueArgs} args - Arguments to find a SourceSystem
     * @example
     * // Get one SourceSystem
     * const sourceSystem = await prisma.sourceSystem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceSystemFindUniqueArgs>(args: SelectSubset<T, SourceSystemFindUniqueArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SourceSystem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SourceSystemFindUniqueOrThrowArgs} args - Arguments to find a SourceSystem
     * @example
     * // Get one SourceSystem
     * const sourceSystem = await prisma.sourceSystem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceSystemFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceSystemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SourceSystem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceSystemFindFirstArgs} args - Arguments to find a SourceSystem
     * @example
     * // Get one SourceSystem
     * const sourceSystem = await prisma.sourceSystem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceSystemFindFirstArgs>(args?: SelectSubset<T, SourceSystemFindFirstArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SourceSystem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceSystemFindFirstOrThrowArgs} args - Arguments to find a SourceSystem
     * @example
     * // Get one SourceSystem
     * const sourceSystem = await prisma.sourceSystem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceSystemFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceSystemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SourceSystems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceSystemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceSystems
     * const sourceSystems = await prisma.sourceSystem.findMany()
     * 
     * // Get first 10 SourceSystems
     * const sourceSystems = await prisma.sourceSystem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceSystemWithIdOnly = await prisma.sourceSystem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceSystemFindManyArgs>(args?: SelectSubset<T, SourceSystemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SourceSystem.
     * @param {SourceSystemCreateArgs} args - Arguments to create a SourceSystem.
     * @example
     * // Create one SourceSystem
     * const SourceSystem = await prisma.sourceSystem.create({
     *   data: {
     *     // ... data to create a SourceSystem
     *   }
     * })
     * 
     */
    create<T extends SourceSystemCreateArgs>(args: SelectSubset<T, SourceSystemCreateArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SourceSystems.
     * @param {SourceSystemCreateManyArgs} args - Arguments to create many SourceSystems.
     * @example
     * // Create many SourceSystems
     * const sourceSystem = await prisma.sourceSystem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceSystemCreateManyArgs>(args?: SelectSubset<T, SourceSystemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceSystems and returns the data saved in the database.
     * @param {SourceSystemCreateManyAndReturnArgs} args - Arguments to create many SourceSystems.
     * @example
     * // Create many SourceSystems
     * const sourceSystem = await prisma.sourceSystem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceSystems and only return the `id`
     * const sourceSystemWithIdOnly = await prisma.sourceSystem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceSystemCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceSystemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SourceSystem.
     * @param {SourceSystemDeleteArgs} args - Arguments to delete one SourceSystem.
     * @example
     * // Delete one SourceSystem
     * const SourceSystem = await prisma.sourceSystem.delete({
     *   where: {
     *     // ... filter to delete one SourceSystem
     *   }
     * })
     * 
     */
    delete<T extends SourceSystemDeleteArgs>(args: SelectSubset<T, SourceSystemDeleteArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SourceSystem.
     * @param {SourceSystemUpdateArgs} args - Arguments to update one SourceSystem.
     * @example
     * // Update one SourceSystem
     * const sourceSystem = await prisma.sourceSystem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceSystemUpdateArgs>(args: SelectSubset<T, SourceSystemUpdateArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SourceSystems.
     * @param {SourceSystemDeleteManyArgs} args - Arguments to filter SourceSystems to delete.
     * @example
     * // Delete a few SourceSystems
     * const { count } = await prisma.sourceSystem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceSystemDeleteManyArgs>(args?: SelectSubset<T, SourceSystemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceSystems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceSystemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceSystems
     * const sourceSystem = await prisma.sourceSystem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceSystemUpdateManyArgs>(args: SelectSubset<T, SourceSystemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SourceSystem.
     * @param {SourceSystemUpsertArgs} args - Arguments to update or create a SourceSystem.
     * @example
     * // Update or create a SourceSystem
     * const sourceSystem = await prisma.sourceSystem.upsert({
     *   create: {
     *     // ... data to create a SourceSystem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceSystem we want to update
     *   }
     * })
     */
    upsert<T extends SourceSystemUpsertArgs>(args: SelectSubset<T, SourceSystemUpsertArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SourceSystems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceSystemCountArgs} args - Arguments to filter SourceSystems to count.
     * @example
     * // Count the number of SourceSystems
     * const count = await prisma.sourceSystem.count({
     *   where: {
     *     // ... the filter for the SourceSystems we want to count
     *   }
     * })
    **/
    count<T extends SourceSystemCountArgs>(
      args?: Subset<T, SourceSystemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceSystemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceSystem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceSystemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceSystemAggregateArgs>(args: Subset<T, SourceSystemAggregateArgs>): Prisma.PrismaPromise<GetSourceSystemAggregateType<T>>

    /**
     * Group by SourceSystem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceSystemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceSystemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceSystemGroupByArgs['orderBy'] }
        : { orderBy?: SourceSystemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceSystemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceSystemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceSystem model
   */
  readonly fields: SourceSystemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceSystem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceSystemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    columnMappings<T extends SourceSystem$columnMappingsArgs<ExtArgs> = {}>(args?: Subset<T, SourceSystem$columnMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "findMany"> | Null>
    uploadBatches<T extends SourceSystem$uploadBatchesArgs<ExtArgs> = {}>(args?: Subset<T, SourceSystem$uploadBatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourceSystem model
   */ 
  interface SourceSystemFieldRefs {
    readonly id: FieldRef<"SourceSystem", 'Int'>
    readonly clientId: FieldRef<"SourceSystem", 'Int'>
    readonly name: FieldRef<"SourceSystem", 'String'>
    readonly createdAt: FieldRef<"SourceSystem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SourceSystem findUnique
   */
  export type SourceSystemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    /**
     * Filter, which SourceSystem to fetch.
     */
    where: SourceSystemWhereUniqueInput
  }

  /**
   * SourceSystem findUniqueOrThrow
   */
  export type SourceSystemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    /**
     * Filter, which SourceSystem to fetch.
     */
    where: SourceSystemWhereUniqueInput
  }

  /**
   * SourceSystem findFirst
   */
  export type SourceSystemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    /**
     * Filter, which SourceSystem to fetch.
     */
    where?: SourceSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceSystems to fetch.
     */
    orderBy?: SourceSystemOrderByWithRelationInput | SourceSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceSystems.
     */
    cursor?: SourceSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceSystems.
     */
    distinct?: SourceSystemScalarFieldEnum | SourceSystemScalarFieldEnum[]
  }

  /**
   * SourceSystem findFirstOrThrow
   */
  export type SourceSystemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    /**
     * Filter, which SourceSystem to fetch.
     */
    where?: SourceSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceSystems to fetch.
     */
    orderBy?: SourceSystemOrderByWithRelationInput | SourceSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceSystems.
     */
    cursor?: SourceSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceSystems.
     */
    distinct?: SourceSystemScalarFieldEnum | SourceSystemScalarFieldEnum[]
  }

  /**
   * SourceSystem findMany
   */
  export type SourceSystemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    /**
     * Filter, which SourceSystems to fetch.
     */
    where?: SourceSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceSystems to fetch.
     */
    orderBy?: SourceSystemOrderByWithRelationInput | SourceSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceSystems.
     */
    cursor?: SourceSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceSystems.
     */
    skip?: number
    distinct?: SourceSystemScalarFieldEnum | SourceSystemScalarFieldEnum[]
  }

  /**
   * SourceSystem create
   */
  export type SourceSystemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceSystem.
     */
    data: XOR<SourceSystemCreateInput, SourceSystemUncheckedCreateInput>
  }

  /**
   * SourceSystem createMany
   */
  export type SourceSystemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceSystems.
     */
    data: SourceSystemCreateManyInput | SourceSystemCreateManyInput[]
  }

  /**
   * SourceSystem createManyAndReturn
   */
  export type SourceSystemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SourceSystems.
     */
    data: SourceSystemCreateManyInput | SourceSystemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceSystem update
   */
  export type SourceSystemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceSystem.
     */
    data: XOR<SourceSystemUpdateInput, SourceSystemUncheckedUpdateInput>
    /**
     * Choose, which SourceSystem to update.
     */
    where: SourceSystemWhereUniqueInput
  }

  /**
   * SourceSystem updateMany
   */
  export type SourceSystemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceSystems.
     */
    data: XOR<SourceSystemUpdateManyMutationInput, SourceSystemUncheckedUpdateManyInput>
    /**
     * Filter which SourceSystems to update
     */
    where?: SourceSystemWhereInput
  }

  /**
   * SourceSystem upsert
   */
  export type SourceSystemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceSystem to update in case it exists.
     */
    where: SourceSystemWhereUniqueInput
    /**
     * In case the SourceSystem found by the `where` argument doesn't exist, create a new SourceSystem with this data.
     */
    create: XOR<SourceSystemCreateInput, SourceSystemUncheckedCreateInput>
    /**
     * In case the SourceSystem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceSystemUpdateInput, SourceSystemUncheckedUpdateInput>
  }

  /**
   * SourceSystem delete
   */
  export type SourceSystemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
    /**
     * Filter which SourceSystem to delete.
     */
    where: SourceSystemWhereUniqueInput
  }

  /**
   * SourceSystem deleteMany
   */
  export type SourceSystemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceSystems to delete
     */
    where?: SourceSystemWhereInput
  }

  /**
   * SourceSystem.columnMappings
   */
  export type SourceSystem$columnMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    where?: ColumnMappingWhereInput
    orderBy?: ColumnMappingOrderByWithRelationInput | ColumnMappingOrderByWithRelationInput[]
    cursor?: ColumnMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColumnMappingScalarFieldEnum | ColumnMappingScalarFieldEnum[]
  }

  /**
   * SourceSystem.uploadBatches
   */
  export type SourceSystem$uploadBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    where?: UploadBatchWhereInput
    orderBy?: UploadBatchOrderByWithRelationInput | UploadBatchOrderByWithRelationInput[]
    cursor?: UploadBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadBatchScalarFieldEnum | UploadBatchScalarFieldEnum[]
  }

  /**
   * SourceSystem without action
   */
  export type SourceSystemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceSystem
     */
    select?: SourceSystemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceSystemInclude<ExtArgs> | null
  }


  /**
   * Model ColumnMapping
   */

  export type AggregateColumnMapping = {
    _count: ColumnMappingCountAggregateOutputType | null
    _avg: ColumnMappingAvgAggregateOutputType | null
    _sum: ColumnMappingSumAggregateOutputType | null
    _min: ColumnMappingMinAggregateOutputType | null
    _max: ColumnMappingMaxAggregateOutputType | null
  }

  export type ColumnMappingAvgAggregateOutputType = {
    id: number | null
    sourceSystemId: number | null
  }

  export type ColumnMappingSumAggregateOutputType = {
    id: number | null
    sourceSystemId: number | null
  }

  export type ColumnMappingMinAggregateOutputType = {
    id: number | null
    sourceSystemId: number | null
    standardizedField: string | null
    rawColumnName: string | null
    constantValue: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColumnMappingMaxAggregateOutputType = {
    id: number | null
    sourceSystemId: number | null
    standardizedField: string | null
    rawColumnName: string | null
    constantValue: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColumnMappingCountAggregateOutputType = {
    id: number
    sourceSystemId: number
    standardizedField: number
    rawColumnName: number
    constantValue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ColumnMappingAvgAggregateInputType = {
    id?: true
    sourceSystemId?: true
  }

  export type ColumnMappingSumAggregateInputType = {
    id?: true
    sourceSystemId?: true
  }

  export type ColumnMappingMinAggregateInputType = {
    id?: true
    sourceSystemId?: true
    standardizedField?: true
    rawColumnName?: true
    constantValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColumnMappingMaxAggregateInputType = {
    id?: true
    sourceSystemId?: true
    standardizedField?: true
    rawColumnName?: true
    constantValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColumnMappingCountAggregateInputType = {
    id?: true
    sourceSystemId?: true
    standardizedField?: true
    rawColumnName?: true
    constantValue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ColumnMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColumnMapping to aggregate.
     */
    where?: ColumnMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMappings to fetch.
     */
    orderBy?: ColumnMappingOrderByWithRelationInput | ColumnMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ColumnMappings
    **/
    _count?: true | ColumnMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColumnMappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColumnMappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnMappingMaxAggregateInputType
  }

  export type GetColumnMappingAggregateType<T extends ColumnMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateColumnMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumnMapping[P]>
      : GetScalarType<T[P], AggregateColumnMapping[P]>
  }




  export type ColumnMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnMappingWhereInput
    orderBy?: ColumnMappingOrderByWithAggregationInput | ColumnMappingOrderByWithAggregationInput[]
    by: ColumnMappingScalarFieldEnum[] | ColumnMappingScalarFieldEnum
    having?: ColumnMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnMappingCountAggregateInputType | true
    _avg?: ColumnMappingAvgAggregateInputType
    _sum?: ColumnMappingSumAggregateInputType
    _min?: ColumnMappingMinAggregateInputType
    _max?: ColumnMappingMaxAggregateInputType
  }

  export type ColumnMappingGroupByOutputType = {
    id: number
    sourceSystemId: number
    standardizedField: string
    rawColumnName: string
    constantValue: string | null
    createdAt: Date
    updatedAt: Date
    _count: ColumnMappingCountAggregateOutputType | null
    _avg: ColumnMappingAvgAggregateOutputType | null
    _sum: ColumnMappingSumAggregateOutputType | null
    _min: ColumnMappingMinAggregateOutputType | null
    _max: ColumnMappingMaxAggregateOutputType | null
  }

  type GetColumnMappingGroupByPayload<T extends ColumnMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColumnMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnMappingGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnMappingGroupByOutputType[P]>
        }
      >
    >


  export type ColumnMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceSystemId?: boolean
    standardizedField?: boolean
    rawColumnName?: boolean
    constantValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceSystem?: boolean | SourceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columnMapping"]>

  export type ColumnMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceSystemId?: boolean
    standardizedField?: boolean
    rawColumnName?: boolean
    constantValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceSystem?: boolean | SourceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columnMapping"]>

  export type ColumnMappingSelectScalar = {
    id?: boolean
    sourceSystemId?: boolean
    standardizedField?: boolean
    rawColumnName?: boolean
    constantValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ColumnMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceSystem?: boolean | SourceSystemDefaultArgs<ExtArgs>
  }
  export type ColumnMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceSystem?: boolean | SourceSystemDefaultArgs<ExtArgs>
  }

  export type $ColumnMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ColumnMapping"
    objects: {
      sourceSystem: Prisma.$SourceSystemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sourceSystemId: number
      standardizedField: string
      rawColumnName: string
      constantValue: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["columnMapping"]>
    composites: {}
  }

  type ColumnMappingGetPayload<S extends boolean | null | undefined | ColumnMappingDefaultArgs> = $Result.GetResult<Prisma.$ColumnMappingPayload, S>

  type ColumnMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ColumnMappingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ColumnMappingCountAggregateInputType | true
    }

  export interface ColumnMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ColumnMapping'], meta: { name: 'ColumnMapping' } }
    /**
     * Find zero or one ColumnMapping that matches the filter.
     * @param {ColumnMappingFindUniqueArgs} args - Arguments to find a ColumnMapping
     * @example
     * // Get one ColumnMapping
     * const columnMapping = await prisma.columnMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnMappingFindUniqueArgs>(args: SelectSubset<T, ColumnMappingFindUniqueArgs<ExtArgs>>): Prisma__ColumnMappingClient<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ColumnMapping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ColumnMappingFindUniqueOrThrowArgs} args - Arguments to find a ColumnMapping
     * @example
     * // Get one ColumnMapping
     * const columnMapping = await prisma.columnMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, ColumnMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColumnMappingClient<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ColumnMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMappingFindFirstArgs} args - Arguments to find a ColumnMapping
     * @example
     * // Get one ColumnMapping
     * const columnMapping = await prisma.columnMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnMappingFindFirstArgs>(args?: SelectSubset<T, ColumnMappingFindFirstArgs<ExtArgs>>): Prisma__ColumnMappingClient<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ColumnMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMappingFindFirstOrThrowArgs} args - Arguments to find a ColumnMapping
     * @example
     * // Get one ColumnMapping
     * const columnMapping = await prisma.columnMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, ColumnMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColumnMappingClient<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ColumnMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ColumnMappings
     * const columnMappings = await prisma.columnMapping.findMany()
     * 
     * // Get first 10 ColumnMappings
     * const columnMappings = await prisma.columnMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnMappingWithIdOnly = await prisma.columnMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColumnMappingFindManyArgs>(args?: SelectSubset<T, ColumnMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ColumnMapping.
     * @param {ColumnMappingCreateArgs} args - Arguments to create a ColumnMapping.
     * @example
     * // Create one ColumnMapping
     * const ColumnMapping = await prisma.columnMapping.create({
     *   data: {
     *     // ... data to create a ColumnMapping
     *   }
     * })
     * 
     */
    create<T extends ColumnMappingCreateArgs>(args: SelectSubset<T, ColumnMappingCreateArgs<ExtArgs>>): Prisma__ColumnMappingClient<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ColumnMappings.
     * @param {ColumnMappingCreateManyArgs} args - Arguments to create many ColumnMappings.
     * @example
     * // Create many ColumnMappings
     * const columnMapping = await prisma.columnMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColumnMappingCreateManyArgs>(args?: SelectSubset<T, ColumnMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ColumnMappings and returns the data saved in the database.
     * @param {ColumnMappingCreateManyAndReturnArgs} args - Arguments to create many ColumnMappings.
     * @example
     * // Create many ColumnMappings
     * const columnMapping = await prisma.columnMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ColumnMappings and only return the `id`
     * const columnMappingWithIdOnly = await prisma.columnMapping.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColumnMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, ColumnMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ColumnMapping.
     * @param {ColumnMappingDeleteArgs} args - Arguments to delete one ColumnMapping.
     * @example
     * // Delete one ColumnMapping
     * const ColumnMapping = await prisma.columnMapping.delete({
     *   where: {
     *     // ... filter to delete one ColumnMapping
     *   }
     * })
     * 
     */
    delete<T extends ColumnMappingDeleteArgs>(args: SelectSubset<T, ColumnMappingDeleteArgs<ExtArgs>>): Prisma__ColumnMappingClient<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ColumnMapping.
     * @param {ColumnMappingUpdateArgs} args - Arguments to update one ColumnMapping.
     * @example
     * // Update one ColumnMapping
     * const columnMapping = await prisma.columnMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColumnMappingUpdateArgs>(args: SelectSubset<T, ColumnMappingUpdateArgs<ExtArgs>>): Prisma__ColumnMappingClient<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ColumnMappings.
     * @param {ColumnMappingDeleteManyArgs} args - Arguments to filter ColumnMappings to delete.
     * @example
     * // Delete a few ColumnMappings
     * const { count } = await prisma.columnMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColumnMappingDeleteManyArgs>(args?: SelectSubset<T, ColumnMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColumnMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ColumnMappings
     * const columnMapping = await prisma.columnMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColumnMappingUpdateManyArgs>(args: SelectSubset<T, ColumnMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ColumnMapping.
     * @param {ColumnMappingUpsertArgs} args - Arguments to update or create a ColumnMapping.
     * @example
     * // Update or create a ColumnMapping
     * const columnMapping = await prisma.columnMapping.upsert({
     *   create: {
     *     // ... data to create a ColumnMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ColumnMapping we want to update
     *   }
     * })
     */
    upsert<T extends ColumnMappingUpsertArgs>(args: SelectSubset<T, ColumnMappingUpsertArgs<ExtArgs>>): Prisma__ColumnMappingClient<$Result.GetResult<Prisma.$ColumnMappingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ColumnMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMappingCountArgs} args - Arguments to filter ColumnMappings to count.
     * @example
     * // Count the number of ColumnMappings
     * const count = await prisma.columnMapping.count({
     *   where: {
     *     // ... the filter for the ColumnMappings we want to count
     *   }
     * })
    **/
    count<T extends ColumnMappingCountArgs>(
      args?: Subset<T, ColumnMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ColumnMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColumnMappingAggregateArgs>(args: Subset<T, ColumnMappingAggregateArgs>): Prisma.PrismaPromise<GetColumnMappingAggregateType<T>>

    /**
     * Group by ColumnMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColumnMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnMappingGroupByArgs['orderBy'] }
        : { orderBy?: ColumnMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColumnMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ColumnMapping model
   */
  readonly fields: ColumnMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ColumnMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceSystem<T extends SourceSystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceSystemDefaultArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ColumnMapping model
   */ 
  interface ColumnMappingFieldRefs {
    readonly id: FieldRef<"ColumnMapping", 'Int'>
    readonly sourceSystemId: FieldRef<"ColumnMapping", 'Int'>
    readonly standardizedField: FieldRef<"ColumnMapping", 'String'>
    readonly rawColumnName: FieldRef<"ColumnMapping", 'String'>
    readonly constantValue: FieldRef<"ColumnMapping", 'String'>
    readonly createdAt: FieldRef<"ColumnMapping", 'DateTime'>
    readonly updatedAt: FieldRef<"ColumnMapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ColumnMapping findUnique
   */
  export type ColumnMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMapping to fetch.
     */
    where: ColumnMappingWhereUniqueInput
  }

  /**
   * ColumnMapping findUniqueOrThrow
   */
  export type ColumnMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMapping to fetch.
     */
    where: ColumnMappingWhereUniqueInput
  }

  /**
   * ColumnMapping findFirst
   */
  export type ColumnMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMapping to fetch.
     */
    where?: ColumnMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMappings to fetch.
     */
    orderBy?: ColumnMappingOrderByWithRelationInput | ColumnMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColumnMappings.
     */
    cursor?: ColumnMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColumnMappings.
     */
    distinct?: ColumnMappingScalarFieldEnum | ColumnMappingScalarFieldEnum[]
  }

  /**
   * ColumnMapping findFirstOrThrow
   */
  export type ColumnMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMapping to fetch.
     */
    where?: ColumnMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMappings to fetch.
     */
    orderBy?: ColumnMappingOrderByWithRelationInput | ColumnMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColumnMappings.
     */
    cursor?: ColumnMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColumnMappings.
     */
    distinct?: ColumnMappingScalarFieldEnum | ColumnMappingScalarFieldEnum[]
  }

  /**
   * ColumnMapping findMany
   */
  export type ColumnMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMappings to fetch.
     */
    where?: ColumnMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMappings to fetch.
     */
    orderBy?: ColumnMappingOrderByWithRelationInput | ColumnMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ColumnMappings.
     */
    cursor?: ColumnMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMappings.
     */
    skip?: number
    distinct?: ColumnMappingScalarFieldEnum | ColumnMappingScalarFieldEnum[]
  }

  /**
   * ColumnMapping create
   */
  export type ColumnMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a ColumnMapping.
     */
    data: XOR<ColumnMappingCreateInput, ColumnMappingUncheckedCreateInput>
  }

  /**
   * ColumnMapping createMany
   */
  export type ColumnMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ColumnMappings.
     */
    data: ColumnMappingCreateManyInput | ColumnMappingCreateManyInput[]
  }

  /**
   * ColumnMapping createManyAndReturn
   */
  export type ColumnMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ColumnMappings.
     */
    data: ColumnMappingCreateManyInput | ColumnMappingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColumnMapping update
   */
  export type ColumnMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a ColumnMapping.
     */
    data: XOR<ColumnMappingUpdateInput, ColumnMappingUncheckedUpdateInput>
    /**
     * Choose, which ColumnMapping to update.
     */
    where: ColumnMappingWhereUniqueInput
  }

  /**
   * ColumnMapping updateMany
   */
  export type ColumnMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ColumnMappings.
     */
    data: XOR<ColumnMappingUpdateManyMutationInput, ColumnMappingUncheckedUpdateManyInput>
    /**
     * Filter which ColumnMappings to update
     */
    where?: ColumnMappingWhereInput
  }

  /**
   * ColumnMapping upsert
   */
  export type ColumnMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the ColumnMapping to update in case it exists.
     */
    where: ColumnMappingWhereUniqueInput
    /**
     * In case the ColumnMapping found by the `where` argument doesn't exist, create a new ColumnMapping with this data.
     */
    create: XOR<ColumnMappingCreateInput, ColumnMappingUncheckedCreateInput>
    /**
     * In case the ColumnMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnMappingUpdateInput, ColumnMappingUncheckedUpdateInput>
  }

  /**
   * ColumnMapping delete
   */
  export type ColumnMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
    /**
     * Filter which ColumnMapping to delete.
     */
    where: ColumnMappingWhereUniqueInput
  }

  /**
   * ColumnMapping deleteMany
   */
  export type ColumnMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColumnMappings to delete
     */
    where?: ColumnMappingWhereInput
  }

  /**
   * ColumnMapping without action
   */
  export type ColumnMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMapping
     */
    select?: ColumnMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMappingInclude<ExtArgs> | null
  }


  /**
   * Model UploadBatch
   */

  export type AggregateUploadBatch = {
    _count: UploadBatchCountAggregateOutputType | null
    _avg: UploadBatchAvgAggregateOutputType | null
    _sum: UploadBatchSumAggregateOutputType | null
    _min: UploadBatchMinAggregateOutputType | null
    _max: UploadBatchMaxAggregateOutputType | null
  }

  export type UploadBatchAvgAggregateOutputType = {
    id: number | null
    sourceSystemId: number | null
  }

  export type UploadBatchSumAggregateOutputType = {
    id: number | null
    sourceSystemId: number | null
  }

  export type UploadBatchMinAggregateOutputType = {
    id: number | null
    sourceSystemId: number | null
    fileName: string | null
    uploadedAt: Date | null
  }

  export type UploadBatchMaxAggregateOutputType = {
    id: number | null
    sourceSystemId: number | null
    fileName: string | null
    uploadedAt: Date | null
  }

  export type UploadBatchCountAggregateOutputType = {
    id: number
    sourceSystemId: number
    fileName: number
    uploadedAt: number
    _all: number
  }


  export type UploadBatchAvgAggregateInputType = {
    id?: true
    sourceSystemId?: true
  }

  export type UploadBatchSumAggregateInputType = {
    id?: true
    sourceSystemId?: true
  }

  export type UploadBatchMinAggregateInputType = {
    id?: true
    sourceSystemId?: true
    fileName?: true
    uploadedAt?: true
  }

  export type UploadBatchMaxAggregateInputType = {
    id?: true
    sourceSystemId?: true
    fileName?: true
    uploadedAt?: true
  }

  export type UploadBatchCountAggregateInputType = {
    id?: true
    sourceSystemId?: true
    fileName?: true
    uploadedAt?: true
    _all?: true
  }

  export type UploadBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadBatch to aggregate.
     */
    where?: UploadBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadBatches to fetch.
     */
    orderBy?: UploadBatchOrderByWithRelationInput | UploadBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadBatches
    **/
    _count?: true | UploadBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadBatchMaxAggregateInputType
  }

  export type GetUploadBatchAggregateType<T extends UploadBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadBatch[P]>
      : GetScalarType<T[P], AggregateUploadBatch[P]>
  }




  export type UploadBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadBatchWhereInput
    orderBy?: UploadBatchOrderByWithAggregationInput | UploadBatchOrderByWithAggregationInput[]
    by: UploadBatchScalarFieldEnum[] | UploadBatchScalarFieldEnum
    having?: UploadBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadBatchCountAggregateInputType | true
    _avg?: UploadBatchAvgAggregateInputType
    _sum?: UploadBatchSumAggregateInputType
    _min?: UploadBatchMinAggregateInputType
    _max?: UploadBatchMaxAggregateInputType
  }

  export type UploadBatchGroupByOutputType = {
    id: number
    sourceSystemId: number
    fileName: string | null
    uploadedAt: Date
    _count: UploadBatchCountAggregateOutputType | null
    _avg: UploadBatchAvgAggregateOutputType | null
    _sum: UploadBatchSumAggregateOutputType | null
    _min: UploadBatchMinAggregateOutputType | null
    _max: UploadBatchMaxAggregateOutputType | null
  }

  type GetUploadBatchGroupByPayload<T extends UploadBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadBatchGroupByOutputType[P]>
            : GetScalarType<T[P], UploadBatchGroupByOutputType[P]>
        }
      >
    >


  export type UploadBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceSystemId?: boolean
    fileName?: boolean
    uploadedAt?: boolean
    sourceSystem?: boolean | SourceSystemDefaultArgs<ExtArgs>
    records?: boolean | UploadBatch$recordsArgs<ExtArgs>
    _count?: boolean | UploadBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadBatch"]>

  export type UploadBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceSystemId?: boolean
    fileName?: boolean
    uploadedAt?: boolean
    sourceSystem?: boolean | SourceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadBatch"]>

  export type UploadBatchSelectScalar = {
    id?: boolean
    sourceSystemId?: boolean
    fileName?: boolean
    uploadedAt?: boolean
  }

  export type UploadBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceSystem?: boolean | SourceSystemDefaultArgs<ExtArgs>
    records?: boolean | UploadBatch$recordsArgs<ExtArgs>
    _count?: boolean | UploadBatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UploadBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceSystem?: boolean | SourceSystemDefaultArgs<ExtArgs>
  }

  export type $UploadBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadBatch"
    objects: {
      sourceSystem: Prisma.$SourceSystemPayload<ExtArgs>
      records: Prisma.$StandardizedRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sourceSystemId: number
      fileName: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["uploadBatch"]>
    composites: {}
  }

  type UploadBatchGetPayload<S extends boolean | null | undefined | UploadBatchDefaultArgs> = $Result.GetResult<Prisma.$UploadBatchPayload, S>

  type UploadBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UploadBatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UploadBatchCountAggregateInputType | true
    }

  export interface UploadBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadBatch'], meta: { name: 'UploadBatch' } }
    /**
     * Find zero or one UploadBatch that matches the filter.
     * @param {UploadBatchFindUniqueArgs} args - Arguments to find a UploadBatch
     * @example
     * // Get one UploadBatch
     * const uploadBatch = await prisma.uploadBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadBatchFindUniqueArgs>(args: SelectSubset<T, UploadBatchFindUniqueArgs<ExtArgs>>): Prisma__UploadBatchClient<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UploadBatch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UploadBatchFindUniqueOrThrowArgs} args - Arguments to find a UploadBatch
     * @example
     * // Get one UploadBatch
     * const uploadBatch = await prisma.uploadBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadBatchClient<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UploadBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadBatchFindFirstArgs} args - Arguments to find a UploadBatch
     * @example
     * // Get one UploadBatch
     * const uploadBatch = await prisma.uploadBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadBatchFindFirstArgs>(args?: SelectSubset<T, UploadBatchFindFirstArgs<ExtArgs>>): Prisma__UploadBatchClient<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UploadBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadBatchFindFirstOrThrowArgs} args - Arguments to find a UploadBatch
     * @example
     * // Get one UploadBatch
     * const uploadBatch = await prisma.uploadBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadBatchClient<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UploadBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadBatches
     * const uploadBatches = await prisma.uploadBatch.findMany()
     * 
     * // Get first 10 UploadBatches
     * const uploadBatches = await prisma.uploadBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadBatchWithIdOnly = await prisma.uploadBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadBatchFindManyArgs>(args?: SelectSubset<T, UploadBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UploadBatch.
     * @param {UploadBatchCreateArgs} args - Arguments to create a UploadBatch.
     * @example
     * // Create one UploadBatch
     * const UploadBatch = await prisma.uploadBatch.create({
     *   data: {
     *     // ... data to create a UploadBatch
     *   }
     * })
     * 
     */
    create<T extends UploadBatchCreateArgs>(args: SelectSubset<T, UploadBatchCreateArgs<ExtArgs>>): Prisma__UploadBatchClient<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UploadBatches.
     * @param {UploadBatchCreateManyArgs} args - Arguments to create many UploadBatches.
     * @example
     * // Create many UploadBatches
     * const uploadBatch = await prisma.uploadBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadBatchCreateManyArgs>(args?: SelectSubset<T, UploadBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadBatches and returns the data saved in the database.
     * @param {UploadBatchCreateManyAndReturnArgs} args - Arguments to create many UploadBatches.
     * @example
     * // Create many UploadBatches
     * const uploadBatch = await prisma.uploadBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadBatches and only return the `id`
     * const uploadBatchWithIdOnly = await prisma.uploadBatch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UploadBatch.
     * @param {UploadBatchDeleteArgs} args - Arguments to delete one UploadBatch.
     * @example
     * // Delete one UploadBatch
     * const UploadBatch = await prisma.uploadBatch.delete({
     *   where: {
     *     // ... filter to delete one UploadBatch
     *   }
     * })
     * 
     */
    delete<T extends UploadBatchDeleteArgs>(args: SelectSubset<T, UploadBatchDeleteArgs<ExtArgs>>): Prisma__UploadBatchClient<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UploadBatch.
     * @param {UploadBatchUpdateArgs} args - Arguments to update one UploadBatch.
     * @example
     * // Update one UploadBatch
     * const uploadBatch = await prisma.uploadBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadBatchUpdateArgs>(args: SelectSubset<T, UploadBatchUpdateArgs<ExtArgs>>): Prisma__UploadBatchClient<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UploadBatches.
     * @param {UploadBatchDeleteManyArgs} args - Arguments to filter UploadBatches to delete.
     * @example
     * // Delete a few UploadBatches
     * const { count } = await prisma.uploadBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadBatchDeleteManyArgs>(args?: SelectSubset<T, UploadBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadBatches
     * const uploadBatch = await prisma.uploadBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadBatchUpdateManyArgs>(args: SelectSubset<T, UploadBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UploadBatch.
     * @param {UploadBatchUpsertArgs} args - Arguments to update or create a UploadBatch.
     * @example
     * // Update or create a UploadBatch
     * const uploadBatch = await prisma.uploadBatch.upsert({
     *   create: {
     *     // ... data to create a UploadBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadBatch we want to update
     *   }
     * })
     */
    upsert<T extends UploadBatchUpsertArgs>(args: SelectSubset<T, UploadBatchUpsertArgs<ExtArgs>>): Prisma__UploadBatchClient<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UploadBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadBatchCountArgs} args - Arguments to filter UploadBatches to count.
     * @example
     * // Count the number of UploadBatches
     * const count = await prisma.uploadBatch.count({
     *   where: {
     *     // ... the filter for the UploadBatches we want to count
     *   }
     * })
    **/
    count<T extends UploadBatchCountArgs>(
      args?: Subset<T, UploadBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadBatchAggregateArgs>(args: Subset<T, UploadBatchAggregateArgs>): Prisma.PrismaPromise<GetUploadBatchAggregateType<T>>

    /**
     * Group by UploadBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadBatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadBatchGroupByArgs['orderBy'] }
        : { orderBy?: UploadBatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadBatch model
   */
  readonly fields: UploadBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceSystem<T extends SourceSystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceSystemDefaultArgs<ExtArgs>>): Prisma__SourceSystemClient<$Result.GetResult<Prisma.$SourceSystemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    records<T extends UploadBatch$recordsArgs<ExtArgs> = {}>(args?: Subset<T, UploadBatch$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadBatch model
   */ 
  interface UploadBatchFieldRefs {
    readonly id: FieldRef<"UploadBatch", 'Int'>
    readonly sourceSystemId: FieldRef<"UploadBatch", 'Int'>
    readonly fileName: FieldRef<"UploadBatch", 'String'>
    readonly uploadedAt: FieldRef<"UploadBatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UploadBatch findUnique
   */
  export type UploadBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    /**
     * Filter, which UploadBatch to fetch.
     */
    where: UploadBatchWhereUniqueInput
  }

  /**
   * UploadBatch findUniqueOrThrow
   */
  export type UploadBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    /**
     * Filter, which UploadBatch to fetch.
     */
    where: UploadBatchWhereUniqueInput
  }

  /**
   * UploadBatch findFirst
   */
  export type UploadBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    /**
     * Filter, which UploadBatch to fetch.
     */
    where?: UploadBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadBatches to fetch.
     */
    orderBy?: UploadBatchOrderByWithRelationInput | UploadBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadBatches.
     */
    cursor?: UploadBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadBatches.
     */
    distinct?: UploadBatchScalarFieldEnum | UploadBatchScalarFieldEnum[]
  }

  /**
   * UploadBatch findFirstOrThrow
   */
  export type UploadBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    /**
     * Filter, which UploadBatch to fetch.
     */
    where?: UploadBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadBatches to fetch.
     */
    orderBy?: UploadBatchOrderByWithRelationInput | UploadBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadBatches.
     */
    cursor?: UploadBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadBatches.
     */
    distinct?: UploadBatchScalarFieldEnum | UploadBatchScalarFieldEnum[]
  }

  /**
   * UploadBatch findMany
   */
  export type UploadBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    /**
     * Filter, which UploadBatches to fetch.
     */
    where?: UploadBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadBatches to fetch.
     */
    orderBy?: UploadBatchOrderByWithRelationInput | UploadBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadBatches.
     */
    cursor?: UploadBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadBatches.
     */
    skip?: number
    distinct?: UploadBatchScalarFieldEnum | UploadBatchScalarFieldEnum[]
  }

  /**
   * UploadBatch create
   */
  export type UploadBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadBatch.
     */
    data: XOR<UploadBatchCreateInput, UploadBatchUncheckedCreateInput>
  }

  /**
   * UploadBatch createMany
   */
  export type UploadBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadBatches.
     */
    data: UploadBatchCreateManyInput | UploadBatchCreateManyInput[]
  }

  /**
   * UploadBatch createManyAndReturn
   */
  export type UploadBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UploadBatches.
     */
    data: UploadBatchCreateManyInput | UploadBatchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadBatch update
   */
  export type UploadBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadBatch.
     */
    data: XOR<UploadBatchUpdateInput, UploadBatchUncheckedUpdateInput>
    /**
     * Choose, which UploadBatch to update.
     */
    where: UploadBatchWhereUniqueInput
  }

  /**
   * UploadBatch updateMany
   */
  export type UploadBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadBatches.
     */
    data: XOR<UploadBatchUpdateManyMutationInput, UploadBatchUncheckedUpdateManyInput>
    /**
     * Filter which UploadBatches to update
     */
    where?: UploadBatchWhereInput
  }

  /**
   * UploadBatch upsert
   */
  export type UploadBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadBatch to update in case it exists.
     */
    where: UploadBatchWhereUniqueInput
    /**
     * In case the UploadBatch found by the `where` argument doesn't exist, create a new UploadBatch with this data.
     */
    create: XOR<UploadBatchCreateInput, UploadBatchUncheckedCreateInput>
    /**
     * In case the UploadBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadBatchUpdateInput, UploadBatchUncheckedUpdateInput>
  }

  /**
   * UploadBatch delete
   */
  export type UploadBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
    /**
     * Filter which UploadBatch to delete.
     */
    where: UploadBatchWhereUniqueInput
  }

  /**
   * UploadBatch deleteMany
   */
  export type UploadBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadBatches to delete
     */
    where?: UploadBatchWhereInput
  }

  /**
   * UploadBatch.records
   */
  export type UploadBatch$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    where?: StandardizedRecordWhereInput
    orderBy?: StandardizedRecordOrderByWithRelationInput | StandardizedRecordOrderByWithRelationInput[]
    cursor?: StandardizedRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StandardizedRecordScalarFieldEnum | StandardizedRecordScalarFieldEnum[]
  }

  /**
   * UploadBatch without action
   */
  export type UploadBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadBatch
     */
    select?: UploadBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadBatchInclude<ExtArgs> | null
  }


  /**
   * Model StandardizedRecord
   */

  export type AggregateStandardizedRecord = {
    _count: StandardizedRecordCountAggregateOutputType | null
    _avg: StandardizedRecordAvgAggregateOutputType | null
    _sum: StandardizedRecordSumAggregateOutputType | null
    _min: StandardizedRecordMinAggregateOutputType | null
    _max: StandardizedRecordMaxAggregateOutputType | null
  }

  export type StandardizedRecordAvgAggregateOutputType = {
    id: number | null
    uploadBatchId: number | null
    amount: number | null
  }

  export type StandardizedRecordSumAggregateOutputType = {
    id: number | null
    uploadBatchId: number | null
    amount: number | null
  }

  export type StandardizedRecordMinAggregateOutputType = {
    id: number | null
    uploadBatchId: number | null
    physicianName: string | null
    physicianNpi: string | null
    physicianDesignation: string | null
    transferOfValue: string | null
    amount: number | null
    date: string | null
  }

  export type StandardizedRecordMaxAggregateOutputType = {
    id: number | null
    uploadBatchId: number | null
    physicianName: string | null
    physicianNpi: string | null
    physicianDesignation: string | null
    transferOfValue: string | null
    amount: number | null
    date: string | null
  }

  export type StandardizedRecordCountAggregateOutputType = {
    id: number
    uploadBatchId: number
    physicianName: number
    physicianNpi: number
    physicianDesignation: number
    transferOfValue: number
    amount: number
    date: number
    _all: number
  }


  export type StandardizedRecordAvgAggregateInputType = {
    id?: true
    uploadBatchId?: true
    amount?: true
  }

  export type StandardizedRecordSumAggregateInputType = {
    id?: true
    uploadBatchId?: true
    amount?: true
  }

  export type StandardizedRecordMinAggregateInputType = {
    id?: true
    uploadBatchId?: true
    physicianName?: true
    physicianNpi?: true
    physicianDesignation?: true
    transferOfValue?: true
    amount?: true
    date?: true
  }

  export type StandardizedRecordMaxAggregateInputType = {
    id?: true
    uploadBatchId?: true
    physicianName?: true
    physicianNpi?: true
    physicianDesignation?: true
    transferOfValue?: true
    amount?: true
    date?: true
  }

  export type StandardizedRecordCountAggregateInputType = {
    id?: true
    uploadBatchId?: true
    physicianName?: true
    physicianNpi?: true
    physicianDesignation?: true
    transferOfValue?: true
    amount?: true
    date?: true
    _all?: true
  }

  export type StandardizedRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StandardizedRecord to aggregate.
     */
    where?: StandardizedRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandardizedRecords to fetch.
     */
    orderBy?: StandardizedRecordOrderByWithRelationInput | StandardizedRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StandardizedRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandardizedRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandardizedRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StandardizedRecords
    **/
    _count?: true | StandardizedRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StandardizedRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StandardizedRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StandardizedRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StandardizedRecordMaxAggregateInputType
  }

  export type GetStandardizedRecordAggregateType<T extends StandardizedRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStandardizedRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStandardizedRecord[P]>
      : GetScalarType<T[P], AggregateStandardizedRecord[P]>
  }




  export type StandardizedRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandardizedRecordWhereInput
    orderBy?: StandardizedRecordOrderByWithAggregationInput | StandardizedRecordOrderByWithAggregationInput[]
    by: StandardizedRecordScalarFieldEnum[] | StandardizedRecordScalarFieldEnum
    having?: StandardizedRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StandardizedRecordCountAggregateInputType | true
    _avg?: StandardizedRecordAvgAggregateInputType
    _sum?: StandardizedRecordSumAggregateInputType
    _min?: StandardizedRecordMinAggregateInputType
    _max?: StandardizedRecordMaxAggregateInputType
  }

  export type StandardizedRecordGroupByOutputType = {
    id: number
    uploadBatchId: number
    physicianName: string | null
    physicianNpi: string | null
    physicianDesignation: string | null
    transferOfValue: string | null
    amount: number | null
    date: string | null
    _count: StandardizedRecordCountAggregateOutputType | null
    _avg: StandardizedRecordAvgAggregateOutputType | null
    _sum: StandardizedRecordSumAggregateOutputType | null
    _min: StandardizedRecordMinAggregateOutputType | null
    _max: StandardizedRecordMaxAggregateOutputType | null
  }

  type GetStandardizedRecordGroupByPayload<T extends StandardizedRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StandardizedRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StandardizedRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StandardizedRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StandardizedRecordGroupByOutputType[P]>
        }
      >
    >


  export type StandardizedRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploadBatchId?: boolean
    physicianName?: boolean
    physicianNpi?: boolean
    physicianDesignation?: boolean
    transferOfValue?: boolean
    amount?: boolean
    date?: boolean
    uploadBatch?: boolean | UploadBatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["standardizedRecord"]>

  export type StandardizedRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploadBatchId?: boolean
    physicianName?: boolean
    physicianNpi?: boolean
    physicianDesignation?: boolean
    transferOfValue?: boolean
    amount?: boolean
    date?: boolean
    uploadBatch?: boolean | UploadBatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["standardizedRecord"]>

  export type StandardizedRecordSelectScalar = {
    id?: boolean
    uploadBatchId?: boolean
    physicianName?: boolean
    physicianNpi?: boolean
    physicianDesignation?: boolean
    transferOfValue?: boolean
    amount?: boolean
    date?: boolean
  }

  export type StandardizedRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadBatch?: boolean | UploadBatchDefaultArgs<ExtArgs>
  }
  export type StandardizedRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadBatch?: boolean | UploadBatchDefaultArgs<ExtArgs>
  }

  export type $StandardizedRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StandardizedRecord"
    objects: {
      uploadBatch: Prisma.$UploadBatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uploadBatchId: number
      physicianName: string | null
      physicianNpi: string | null
      physicianDesignation: string | null
      transferOfValue: string | null
      amount: number | null
      date: string | null
    }, ExtArgs["result"]["standardizedRecord"]>
    composites: {}
  }

  type StandardizedRecordGetPayload<S extends boolean | null | undefined | StandardizedRecordDefaultArgs> = $Result.GetResult<Prisma.$StandardizedRecordPayload, S>

  type StandardizedRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StandardizedRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StandardizedRecordCountAggregateInputType | true
    }

  export interface StandardizedRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StandardizedRecord'], meta: { name: 'StandardizedRecord' } }
    /**
     * Find zero or one StandardizedRecord that matches the filter.
     * @param {StandardizedRecordFindUniqueArgs} args - Arguments to find a StandardizedRecord
     * @example
     * // Get one StandardizedRecord
     * const standardizedRecord = await prisma.standardizedRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StandardizedRecordFindUniqueArgs>(args: SelectSubset<T, StandardizedRecordFindUniqueArgs<ExtArgs>>): Prisma__StandardizedRecordClient<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StandardizedRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StandardizedRecordFindUniqueOrThrowArgs} args - Arguments to find a StandardizedRecord
     * @example
     * // Get one StandardizedRecord
     * const standardizedRecord = await prisma.standardizedRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StandardizedRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, StandardizedRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StandardizedRecordClient<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StandardizedRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardizedRecordFindFirstArgs} args - Arguments to find a StandardizedRecord
     * @example
     * // Get one StandardizedRecord
     * const standardizedRecord = await prisma.standardizedRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StandardizedRecordFindFirstArgs>(args?: SelectSubset<T, StandardizedRecordFindFirstArgs<ExtArgs>>): Prisma__StandardizedRecordClient<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StandardizedRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardizedRecordFindFirstOrThrowArgs} args - Arguments to find a StandardizedRecord
     * @example
     * // Get one StandardizedRecord
     * const standardizedRecord = await prisma.standardizedRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StandardizedRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, StandardizedRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__StandardizedRecordClient<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StandardizedRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardizedRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StandardizedRecords
     * const standardizedRecords = await prisma.standardizedRecord.findMany()
     * 
     * // Get first 10 StandardizedRecords
     * const standardizedRecords = await prisma.standardizedRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const standardizedRecordWithIdOnly = await prisma.standardizedRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StandardizedRecordFindManyArgs>(args?: SelectSubset<T, StandardizedRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StandardizedRecord.
     * @param {StandardizedRecordCreateArgs} args - Arguments to create a StandardizedRecord.
     * @example
     * // Create one StandardizedRecord
     * const StandardizedRecord = await prisma.standardizedRecord.create({
     *   data: {
     *     // ... data to create a StandardizedRecord
     *   }
     * })
     * 
     */
    create<T extends StandardizedRecordCreateArgs>(args: SelectSubset<T, StandardizedRecordCreateArgs<ExtArgs>>): Prisma__StandardizedRecordClient<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StandardizedRecords.
     * @param {StandardizedRecordCreateManyArgs} args - Arguments to create many StandardizedRecords.
     * @example
     * // Create many StandardizedRecords
     * const standardizedRecord = await prisma.standardizedRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StandardizedRecordCreateManyArgs>(args?: SelectSubset<T, StandardizedRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StandardizedRecords and returns the data saved in the database.
     * @param {StandardizedRecordCreateManyAndReturnArgs} args - Arguments to create many StandardizedRecords.
     * @example
     * // Create many StandardizedRecords
     * const standardizedRecord = await prisma.standardizedRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StandardizedRecords and only return the `id`
     * const standardizedRecordWithIdOnly = await prisma.standardizedRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StandardizedRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, StandardizedRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StandardizedRecord.
     * @param {StandardizedRecordDeleteArgs} args - Arguments to delete one StandardizedRecord.
     * @example
     * // Delete one StandardizedRecord
     * const StandardizedRecord = await prisma.standardizedRecord.delete({
     *   where: {
     *     // ... filter to delete one StandardizedRecord
     *   }
     * })
     * 
     */
    delete<T extends StandardizedRecordDeleteArgs>(args: SelectSubset<T, StandardizedRecordDeleteArgs<ExtArgs>>): Prisma__StandardizedRecordClient<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StandardizedRecord.
     * @param {StandardizedRecordUpdateArgs} args - Arguments to update one StandardizedRecord.
     * @example
     * // Update one StandardizedRecord
     * const standardizedRecord = await prisma.standardizedRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StandardizedRecordUpdateArgs>(args: SelectSubset<T, StandardizedRecordUpdateArgs<ExtArgs>>): Prisma__StandardizedRecordClient<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StandardizedRecords.
     * @param {StandardizedRecordDeleteManyArgs} args - Arguments to filter StandardizedRecords to delete.
     * @example
     * // Delete a few StandardizedRecords
     * const { count } = await prisma.standardizedRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StandardizedRecordDeleteManyArgs>(args?: SelectSubset<T, StandardizedRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StandardizedRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardizedRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StandardizedRecords
     * const standardizedRecord = await prisma.standardizedRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StandardizedRecordUpdateManyArgs>(args: SelectSubset<T, StandardizedRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StandardizedRecord.
     * @param {StandardizedRecordUpsertArgs} args - Arguments to update or create a StandardizedRecord.
     * @example
     * // Update or create a StandardizedRecord
     * const standardizedRecord = await prisma.standardizedRecord.upsert({
     *   create: {
     *     // ... data to create a StandardizedRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StandardizedRecord we want to update
     *   }
     * })
     */
    upsert<T extends StandardizedRecordUpsertArgs>(args: SelectSubset<T, StandardizedRecordUpsertArgs<ExtArgs>>): Prisma__StandardizedRecordClient<$Result.GetResult<Prisma.$StandardizedRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StandardizedRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardizedRecordCountArgs} args - Arguments to filter StandardizedRecords to count.
     * @example
     * // Count the number of StandardizedRecords
     * const count = await prisma.standardizedRecord.count({
     *   where: {
     *     // ... the filter for the StandardizedRecords we want to count
     *   }
     * })
    **/
    count<T extends StandardizedRecordCountArgs>(
      args?: Subset<T, StandardizedRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StandardizedRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StandardizedRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardizedRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StandardizedRecordAggregateArgs>(args: Subset<T, StandardizedRecordAggregateArgs>): Prisma.PrismaPromise<GetStandardizedRecordAggregateType<T>>

    /**
     * Group by StandardizedRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardizedRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StandardizedRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StandardizedRecordGroupByArgs['orderBy'] }
        : { orderBy?: StandardizedRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StandardizedRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStandardizedRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StandardizedRecord model
   */
  readonly fields: StandardizedRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StandardizedRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StandardizedRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadBatch<T extends UploadBatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UploadBatchDefaultArgs<ExtArgs>>): Prisma__UploadBatchClient<$Result.GetResult<Prisma.$UploadBatchPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StandardizedRecord model
   */ 
  interface StandardizedRecordFieldRefs {
    readonly id: FieldRef<"StandardizedRecord", 'Int'>
    readonly uploadBatchId: FieldRef<"StandardizedRecord", 'Int'>
    readonly physicianName: FieldRef<"StandardizedRecord", 'String'>
    readonly physicianNpi: FieldRef<"StandardizedRecord", 'String'>
    readonly physicianDesignation: FieldRef<"StandardizedRecord", 'String'>
    readonly transferOfValue: FieldRef<"StandardizedRecord", 'String'>
    readonly amount: FieldRef<"StandardizedRecord", 'Float'>
    readonly date: FieldRef<"StandardizedRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StandardizedRecord findUnique
   */
  export type StandardizedRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    /**
     * Filter, which StandardizedRecord to fetch.
     */
    where: StandardizedRecordWhereUniqueInput
  }

  /**
   * StandardizedRecord findUniqueOrThrow
   */
  export type StandardizedRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    /**
     * Filter, which StandardizedRecord to fetch.
     */
    where: StandardizedRecordWhereUniqueInput
  }

  /**
   * StandardizedRecord findFirst
   */
  export type StandardizedRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    /**
     * Filter, which StandardizedRecord to fetch.
     */
    where?: StandardizedRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandardizedRecords to fetch.
     */
    orderBy?: StandardizedRecordOrderByWithRelationInput | StandardizedRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StandardizedRecords.
     */
    cursor?: StandardizedRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandardizedRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandardizedRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StandardizedRecords.
     */
    distinct?: StandardizedRecordScalarFieldEnum | StandardizedRecordScalarFieldEnum[]
  }

  /**
   * StandardizedRecord findFirstOrThrow
   */
  export type StandardizedRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    /**
     * Filter, which StandardizedRecord to fetch.
     */
    where?: StandardizedRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandardizedRecords to fetch.
     */
    orderBy?: StandardizedRecordOrderByWithRelationInput | StandardizedRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StandardizedRecords.
     */
    cursor?: StandardizedRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandardizedRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandardizedRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StandardizedRecords.
     */
    distinct?: StandardizedRecordScalarFieldEnum | StandardizedRecordScalarFieldEnum[]
  }

  /**
   * StandardizedRecord findMany
   */
  export type StandardizedRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    /**
     * Filter, which StandardizedRecords to fetch.
     */
    where?: StandardizedRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandardizedRecords to fetch.
     */
    orderBy?: StandardizedRecordOrderByWithRelationInput | StandardizedRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StandardizedRecords.
     */
    cursor?: StandardizedRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandardizedRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandardizedRecords.
     */
    skip?: number
    distinct?: StandardizedRecordScalarFieldEnum | StandardizedRecordScalarFieldEnum[]
  }

  /**
   * StandardizedRecord create
   */
  export type StandardizedRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a StandardizedRecord.
     */
    data: XOR<StandardizedRecordCreateInput, StandardizedRecordUncheckedCreateInput>
  }

  /**
   * StandardizedRecord createMany
   */
  export type StandardizedRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StandardizedRecords.
     */
    data: StandardizedRecordCreateManyInput | StandardizedRecordCreateManyInput[]
  }

  /**
   * StandardizedRecord createManyAndReturn
   */
  export type StandardizedRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StandardizedRecords.
     */
    data: StandardizedRecordCreateManyInput | StandardizedRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StandardizedRecord update
   */
  export type StandardizedRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a StandardizedRecord.
     */
    data: XOR<StandardizedRecordUpdateInput, StandardizedRecordUncheckedUpdateInput>
    /**
     * Choose, which StandardizedRecord to update.
     */
    where: StandardizedRecordWhereUniqueInput
  }

  /**
   * StandardizedRecord updateMany
   */
  export type StandardizedRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StandardizedRecords.
     */
    data: XOR<StandardizedRecordUpdateManyMutationInput, StandardizedRecordUncheckedUpdateManyInput>
    /**
     * Filter which StandardizedRecords to update
     */
    where?: StandardizedRecordWhereInput
  }

  /**
   * StandardizedRecord upsert
   */
  export type StandardizedRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the StandardizedRecord to update in case it exists.
     */
    where: StandardizedRecordWhereUniqueInput
    /**
     * In case the StandardizedRecord found by the `where` argument doesn't exist, create a new StandardizedRecord with this data.
     */
    create: XOR<StandardizedRecordCreateInput, StandardizedRecordUncheckedCreateInput>
    /**
     * In case the StandardizedRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StandardizedRecordUpdateInput, StandardizedRecordUncheckedUpdateInput>
  }

  /**
   * StandardizedRecord delete
   */
  export type StandardizedRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
    /**
     * Filter which StandardizedRecord to delete.
     */
    where: StandardizedRecordWhereUniqueInput
  }

  /**
   * StandardizedRecord deleteMany
   */
  export type StandardizedRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StandardizedRecords to delete
     */
    where?: StandardizedRecordWhereInput
  }

  /**
   * StandardizedRecord without action
   */
  export type StandardizedRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardizedRecord
     */
    select?: StandardizedRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandardizedRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SourceSystemScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type SourceSystemScalarFieldEnum = (typeof SourceSystemScalarFieldEnum)[keyof typeof SourceSystemScalarFieldEnum]


  export const ColumnMappingScalarFieldEnum: {
    id: 'id',
    sourceSystemId: 'sourceSystemId',
    standardizedField: 'standardizedField',
    rawColumnName: 'rawColumnName',
    constantValue: 'constantValue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ColumnMappingScalarFieldEnum = (typeof ColumnMappingScalarFieldEnum)[keyof typeof ColumnMappingScalarFieldEnum]


  export const UploadBatchScalarFieldEnum: {
    id: 'id',
    sourceSystemId: 'sourceSystemId',
    fileName: 'fileName',
    uploadedAt: 'uploadedAt'
  };

  export type UploadBatchScalarFieldEnum = (typeof UploadBatchScalarFieldEnum)[keyof typeof UploadBatchScalarFieldEnum]


  export const StandardizedRecordScalarFieldEnum: {
    id: 'id',
    uploadBatchId: 'uploadBatchId',
    physicianName: 'physicianName',
    physicianNpi: 'physicianNpi',
    physicianDesignation: 'physicianDesignation',
    transferOfValue: 'transferOfValue',
    amount: 'amount',
    date: 'date'
  };

  export type StandardizedRecordScalarFieldEnum = (typeof StandardizedRecordScalarFieldEnum)[keyof typeof StandardizedRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    sourceSystems?: SourceSystemListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    sourceSystems?: SourceSystemOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    createdAt?: DateTimeFilter<"Client"> | Date | string
    sourceSystems?: SourceSystemListRelationFilter
  }, "id" | "name">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type SourceSystemWhereInput = {
    AND?: SourceSystemWhereInput | SourceSystemWhereInput[]
    OR?: SourceSystemWhereInput[]
    NOT?: SourceSystemWhereInput | SourceSystemWhereInput[]
    id?: IntFilter<"SourceSystem"> | number
    clientId?: IntFilter<"SourceSystem"> | number
    name?: StringFilter<"SourceSystem"> | string
    createdAt?: DateTimeFilter<"SourceSystem"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    columnMappings?: ColumnMappingListRelationFilter
    uploadBatches?: UploadBatchListRelationFilter
  }

  export type SourceSystemOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    columnMappings?: ColumnMappingOrderByRelationAggregateInput
    uploadBatches?: UploadBatchOrderByRelationAggregateInput
  }

  export type SourceSystemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clientId_name?: SourceSystemClientIdNameCompoundUniqueInput
    AND?: SourceSystemWhereInput | SourceSystemWhereInput[]
    OR?: SourceSystemWhereInput[]
    NOT?: SourceSystemWhereInput | SourceSystemWhereInput[]
    clientId?: IntFilter<"SourceSystem"> | number
    name?: StringFilter<"SourceSystem"> | string
    createdAt?: DateTimeFilter<"SourceSystem"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    columnMappings?: ColumnMappingListRelationFilter
    uploadBatches?: UploadBatchListRelationFilter
  }, "id" | "clientId_name">

  export type SourceSystemOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: SourceSystemCountOrderByAggregateInput
    _avg?: SourceSystemAvgOrderByAggregateInput
    _max?: SourceSystemMaxOrderByAggregateInput
    _min?: SourceSystemMinOrderByAggregateInput
    _sum?: SourceSystemSumOrderByAggregateInput
  }

  export type SourceSystemScalarWhereWithAggregatesInput = {
    AND?: SourceSystemScalarWhereWithAggregatesInput | SourceSystemScalarWhereWithAggregatesInput[]
    OR?: SourceSystemScalarWhereWithAggregatesInput[]
    NOT?: SourceSystemScalarWhereWithAggregatesInput | SourceSystemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SourceSystem"> | number
    clientId?: IntWithAggregatesFilter<"SourceSystem"> | number
    name?: StringWithAggregatesFilter<"SourceSystem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SourceSystem"> | Date | string
  }

  export type ColumnMappingWhereInput = {
    AND?: ColumnMappingWhereInput | ColumnMappingWhereInput[]
    OR?: ColumnMappingWhereInput[]
    NOT?: ColumnMappingWhereInput | ColumnMappingWhereInput[]
    id?: IntFilter<"ColumnMapping"> | number
    sourceSystemId?: IntFilter<"ColumnMapping"> | number
    standardizedField?: StringFilter<"ColumnMapping"> | string
    rawColumnName?: StringFilter<"ColumnMapping"> | string
    constantValue?: StringNullableFilter<"ColumnMapping"> | string | null
    createdAt?: DateTimeFilter<"ColumnMapping"> | Date | string
    updatedAt?: DateTimeFilter<"ColumnMapping"> | Date | string
    sourceSystem?: XOR<SourceSystemRelationFilter, SourceSystemWhereInput>
  }

  export type ColumnMappingOrderByWithRelationInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    standardizedField?: SortOrder
    rawColumnName?: SortOrder
    constantValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceSystem?: SourceSystemOrderByWithRelationInput
  }

  export type ColumnMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sourceSystemId_standardizedField_rawColumnName?: ColumnMappingSourceSystemIdStandardizedFieldRawColumnNameCompoundUniqueInput
    AND?: ColumnMappingWhereInput | ColumnMappingWhereInput[]
    OR?: ColumnMappingWhereInput[]
    NOT?: ColumnMappingWhereInput | ColumnMappingWhereInput[]
    sourceSystemId?: IntFilter<"ColumnMapping"> | number
    standardizedField?: StringFilter<"ColumnMapping"> | string
    rawColumnName?: StringFilter<"ColumnMapping"> | string
    constantValue?: StringNullableFilter<"ColumnMapping"> | string | null
    createdAt?: DateTimeFilter<"ColumnMapping"> | Date | string
    updatedAt?: DateTimeFilter<"ColumnMapping"> | Date | string
    sourceSystem?: XOR<SourceSystemRelationFilter, SourceSystemWhereInput>
  }, "id" | "sourceSystemId_standardizedField_rawColumnName">

  export type ColumnMappingOrderByWithAggregationInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    standardizedField?: SortOrder
    rawColumnName?: SortOrder
    constantValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ColumnMappingCountOrderByAggregateInput
    _avg?: ColumnMappingAvgOrderByAggregateInput
    _max?: ColumnMappingMaxOrderByAggregateInput
    _min?: ColumnMappingMinOrderByAggregateInput
    _sum?: ColumnMappingSumOrderByAggregateInput
  }

  export type ColumnMappingScalarWhereWithAggregatesInput = {
    AND?: ColumnMappingScalarWhereWithAggregatesInput | ColumnMappingScalarWhereWithAggregatesInput[]
    OR?: ColumnMappingScalarWhereWithAggregatesInput[]
    NOT?: ColumnMappingScalarWhereWithAggregatesInput | ColumnMappingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ColumnMapping"> | number
    sourceSystemId?: IntWithAggregatesFilter<"ColumnMapping"> | number
    standardizedField?: StringWithAggregatesFilter<"ColumnMapping"> | string
    rawColumnName?: StringWithAggregatesFilter<"ColumnMapping"> | string
    constantValue?: StringNullableWithAggregatesFilter<"ColumnMapping"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ColumnMapping"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ColumnMapping"> | Date | string
  }

  export type UploadBatchWhereInput = {
    AND?: UploadBatchWhereInput | UploadBatchWhereInput[]
    OR?: UploadBatchWhereInput[]
    NOT?: UploadBatchWhereInput | UploadBatchWhereInput[]
    id?: IntFilter<"UploadBatch"> | number
    sourceSystemId?: IntFilter<"UploadBatch"> | number
    fileName?: StringNullableFilter<"UploadBatch"> | string | null
    uploadedAt?: DateTimeFilter<"UploadBatch"> | Date | string
    sourceSystem?: XOR<SourceSystemRelationFilter, SourceSystemWhereInput>
    records?: StandardizedRecordListRelationFilter
  }

  export type UploadBatchOrderByWithRelationInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    fileName?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    sourceSystem?: SourceSystemOrderByWithRelationInput
    records?: StandardizedRecordOrderByRelationAggregateInput
  }

  export type UploadBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UploadBatchWhereInput | UploadBatchWhereInput[]
    OR?: UploadBatchWhereInput[]
    NOT?: UploadBatchWhereInput | UploadBatchWhereInput[]
    sourceSystemId?: IntFilter<"UploadBatch"> | number
    fileName?: StringNullableFilter<"UploadBatch"> | string | null
    uploadedAt?: DateTimeFilter<"UploadBatch"> | Date | string
    sourceSystem?: XOR<SourceSystemRelationFilter, SourceSystemWhereInput>
    records?: StandardizedRecordListRelationFilter
  }, "id">

  export type UploadBatchOrderByWithAggregationInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    fileName?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: UploadBatchCountOrderByAggregateInput
    _avg?: UploadBatchAvgOrderByAggregateInput
    _max?: UploadBatchMaxOrderByAggregateInput
    _min?: UploadBatchMinOrderByAggregateInput
    _sum?: UploadBatchSumOrderByAggregateInput
  }

  export type UploadBatchScalarWhereWithAggregatesInput = {
    AND?: UploadBatchScalarWhereWithAggregatesInput | UploadBatchScalarWhereWithAggregatesInput[]
    OR?: UploadBatchScalarWhereWithAggregatesInput[]
    NOT?: UploadBatchScalarWhereWithAggregatesInput | UploadBatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UploadBatch"> | number
    sourceSystemId?: IntWithAggregatesFilter<"UploadBatch"> | number
    fileName?: StringNullableWithAggregatesFilter<"UploadBatch"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"UploadBatch"> | Date | string
  }

  export type StandardizedRecordWhereInput = {
    AND?: StandardizedRecordWhereInput | StandardizedRecordWhereInput[]
    OR?: StandardizedRecordWhereInput[]
    NOT?: StandardizedRecordWhereInput | StandardizedRecordWhereInput[]
    id?: IntFilter<"StandardizedRecord"> | number
    uploadBatchId?: IntFilter<"StandardizedRecord"> | number
    physicianName?: StringNullableFilter<"StandardizedRecord"> | string | null
    physicianNpi?: StringNullableFilter<"StandardizedRecord"> | string | null
    physicianDesignation?: StringNullableFilter<"StandardizedRecord"> | string | null
    transferOfValue?: StringNullableFilter<"StandardizedRecord"> | string | null
    amount?: FloatNullableFilter<"StandardizedRecord"> | number | null
    date?: StringNullableFilter<"StandardizedRecord"> | string | null
    uploadBatch?: XOR<UploadBatchRelationFilter, UploadBatchWhereInput>
  }

  export type StandardizedRecordOrderByWithRelationInput = {
    id?: SortOrder
    uploadBatchId?: SortOrder
    physicianName?: SortOrderInput | SortOrder
    physicianNpi?: SortOrderInput | SortOrder
    physicianDesignation?: SortOrderInput | SortOrder
    transferOfValue?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    uploadBatch?: UploadBatchOrderByWithRelationInput
  }

  export type StandardizedRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StandardizedRecordWhereInput | StandardizedRecordWhereInput[]
    OR?: StandardizedRecordWhereInput[]
    NOT?: StandardizedRecordWhereInput | StandardizedRecordWhereInput[]
    uploadBatchId?: IntFilter<"StandardizedRecord"> | number
    physicianName?: StringNullableFilter<"StandardizedRecord"> | string | null
    physicianNpi?: StringNullableFilter<"StandardizedRecord"> | string | null
    physicianDesignation?: StringNullableFilter<"StandardizedRecord"> | string | null
    transferOfValue?: StringNullableFilter<"StandardizedRecord"> | string | null
    amount?: FloatNullableFilter<"StandardizedRecord"> | number | null
    date?: StringNullableFilter<"StandardizedRecord"> | string | null
    uploadBatch?: XOR<UploadBatchRelationFilter, UploadBatchWhereInput>
  }, "id">

  export type StandardizedRecordOrderByWithAggregationInput = {
    id?: SortOrder
    uploadBatchId?: SortOrder
    physicianName?: SortOrderInput | SortOrder
    physicianNpi?: SortOrderInput | SortOrder
    physicianDesignation?: SortOrderInput | SortOrder
    transferOfValue?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    _count?: StandardizedRecordCountOrderByAggregateInput
    _avg?: StandardizedRecordAvgOrderByAggregateInput
    _max?: StandardizedRecordMaxOrderByAggregateInput
    _min?: StandardizedRecordMinOrderByAggregateInput
    _sum?: StandardizedRecordSumOrderByAggregateInput
  }

  export type StandardizedRecordScalarWhereWithAggregatesInput = {
    AND?: StandardizedRecordScalarWhereWithAggregatesInput | StandardizedRecordScalarWhereWithAggregatesInput[]
    OR?: StandardizedRecordScalarWhereWithAggregatesInput[]
    NOT?: StandardizedRecordScalarWhereWithAggregatesInput | StandardizedRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StandardizedRecord"> | number
    uploadBatchId?: IntWithAggregatesFilter<"StandardizedRecord"> | number
    physicianName?: StringNullableWithAggregatesFilter<"StandardizedRecord"> | string | null
    physicianNpi?: StringNullableWithAggregatesFilter<"StandardizedRecord"> | string | null
    physicianDesignation?: StringNullableWithAggregatesFilter<"StandardizedRecord"> | string | null
    transferOfValue?: StringNullableWithAggregatesFilter<"StandardizedRecord"> | string | null
    amount?: FloatNullableWithAggregatesFilter<"StandardizedRecord"> | number | null
    date?: StringNullableWithAggregatesFilter<"StandardizedRecord"> | string | null
  }

  export type ClientCreateInput = {
    name: string
    createdAt?: Date | string
    sourceSystems?: SourceSystemCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    sourceSystems?: SourceSystemUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceSystems?: SourceSystemUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceSystems?: SourceSystemUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceSystemCreateInput = {
    name: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutSourceSystemsInput
    columnMappings?: ColumnMappingCreateNestedManyWithoutSourceSystemInput
    uploadBatches?: UploadBatchCreateNestedManyWithoutSourceSystemInput
  }

  export type SourceSystemUncheckedCreateInput = {
    id?: number
    clientId: number
    name: string
    createdAt?: Date | string
    columnMappings?: ColumnMappingUncheckedCreateNestedManyWithoutSourceSystemInput
    uploadBatches?: UploadBatchUncheckedCreateNestedManyWithoutSourceSystemInput
  }

  export type SourceSystemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSourceSystemsNestedInput
    columnMappings?: ColumnMappingUpdateManyWithoutSourceSystemNestedInput
    uploadBatches?: UploadBatchUpdateManyWithoutSourceSystemNestedInput
  }

  export type SourceSystemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnMappings?: ColumnMappingUncheckedUpdateManyWithoutSourceSystemNestedInput
    uploadBatches?: UploadBatchUncheckedUpdateManyWithoutSourceSystemNestedInput
  }

  export type SourceSystemCreateManyInput = {
    id?: number
    clientId: number
    name: string
    createdAt?: Date | string
  }

  export type SourceSystemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceSystemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMappingCreateInput = {
    standardizedField: string
    rawColumnName: string
    constantValue?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceSystem: SourceSystemCreateNestedOneWithoutColumnMappingsInput
  }

  export type ColumnMappingUncheckedCreateInput = {
    id?: number
    sourceSystemId: number
    standardizedField: string
    rawColumnName: string
    constantValue?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColumnMappingUpdateInput = {
    standardizedField?: StringFieldUpdateOperationsInput | string
    rawColumnName?: StringFieldUpdateOperationsInput | string
    constantValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceSystem?: SourceSystemUpdateOneRequiredWithoutColumnMappingsNestedInput
  }

  export type ColumnMappingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystemId?: IntFieldUpdateOperationsInput | number
    standardizedField?: StringFieldUpdateOperationsInput | string
    rawColumnName?: StringFieldUpdateOperationsInput | string
    constantValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMappingCreateManyInput = {
    id?: number
    sourceSystemId: number
    standardizedField: string
    rawColumnName: string
    constantValue?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColumnMappingUpdateManyMutationInput = {
    standardizedField?: StringFieldUpdateOperationsInput | string
    rawColumnName?: StringFieldUpdateOperationsInput | string
    constantValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMappingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystemId?: IntFieldUpdateOperationsInput | number
    standardizedField?: StringFieldUpdateOperationsInput | string
    rawColumnName?: StringFieldUpdateOperationsInput | string
    constantValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadBatchCreateInput = {
    fileName?: string | null
    uploadedAt?: Date | string
    sourceSystem: SourceSystemCreateNestedOneWithoutUploadBatchesInput
    records?: StandardizedRecordCreateNestedManyWithoutUploadBatchInput
  }

  export type UploadBatchUncheckedCreateInput = {
    id?: number
    sourceSystemId: number
    fileName?: string | null
    uploadedAt?: Date | string
    records?: StandardizedRecordUncheckedCreateNestedManyWithoutUploadBatchInput
  }

  export type UploadBatchUpdateInput = {
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceSystem?: SourceSystemUpdateOneRequiredWithoutUploadBatchesNestedInput
    records?: StandardizedRecordUpdateManyWithoutUploadBatchNestedInput
  }

  export type UploadBatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystemId?: IntFieldUpdateOperationsInput | number
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: StandardizedRecordUncheckedUpdateManyWithoutUploadBatchNestedInput
  }

  export type UploadBatchCreateManyInput = {
    id?: number
    sourceSystemId: number
    fileName?: string | null
    uploadedAt?: Date | string
  }

  export type UploadBatchUpdateManyMutationInput = {
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadBatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystemId?: IntFieldUpdateOperationsInput | number
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandardizedRecordCreateInput = {
    physicianName?: string | null
    physicianNpi?: string | null
    physicianDesignation?: string | null
    transferOfValue?: string | null
    amount?: number | null
    date?: string | null
    uploadBatch: UploadBatchCreateNestedOneWithoutRecordsInput
  }

  export type StandardizedRecordUncheckedCreateInput = {
    id?: number
    uploadBatchId: number
    physicianName?: string | null
    physicianNpi?: string | null
    physicianDesignation?: string | null
    transferOfValue?: string | null
    amount?: number | null
    date?: string | null
  }

  export type StandardizedRecordUpdateInput = {
    physicianName?: NullableStringFieldUpdateOperationsInput | string | null
    physicianNpi?: NullableStringFieldUpdateOperationsInput | string | null
    physicianDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    transferOfValue?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    uploadBatch?: UploadBatchUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type StandardizedRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uploadBatchId?: IntFieldUpdateOperationsInput | number
    physicianName?: NullableStringFieldUpdateOperationsInput | string | null
    physicianNpi?: NullableStringFieldUpdateOperationsInput | string | null
    physicianDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    transferOfValue?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StandardizedRecordCreateManyInput = {
    id?: number
    uploadBatchId: number
    physicianName?: string | null
    physicianNpi?: string | null
    physicianDesignation?: string | null
    transferOfValue?: string | null
    amount?: number | null
    date?: string | null
  }

  export type StandardizedRecordUpdateManyMutationInput = {
    physicianName?: NullableStringFieldUpdateOperationsInput | string | null
    physicianNpi?: NullableStringFieldUpdateOperationsInput | string | null
    physicianDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    transferOfValue?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StandardizedRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uploadBatchId?: IntFieldUpdateOperationsInput | number
    physicianName?: NullableStringFieldUpdateOperationsInput | string | null
    physicianNpi?: NullableStringFieldUpdateOperationsInput | string | null
    physicianDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    transferOfValue?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SourceSystemListRelationFilter = {
    every?: SourceSystemWhereInput
    some?: SourceSystemWhereInput
    none?: SourceSystemWhereInput
  }

  export type SourceSystemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ColumnMappingListRelationFilter = {
    every?: ColumnMappingWhereInput
    some?: ColumnMappingWhereInput
    none?: ColumnMappingWhereInput
  }

  export type UploadBatchListRelationFilter = {
    every?: UploadBatchWhereInput
    some?: UploadBatchWhereInput
    none?: UploadBatchWhereInput
  }

  export type ColumnMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UploadBatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceSystemClientIdNameCompoundUniqueInput = {
    clientId: number
    name: string
  }

  export type SourceSystemCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SourceSystemAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type SourceSystemMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SourceSystemMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SourceSystemSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SourceSystemRelationFilter = {
    is?: SourceSystemWhereInput
    isNot?: SourceSystemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ColumnMappingSourceSystemIdStandardizedFieldRawColumnNameCompoundUniqueInput = {
    sourceSystemId: number
    standardizedField: string
    rawColumnName: string
  }

  export type ColumnMappingCountOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    standardizedField?: SortOrder
    rawColumnName?: SortOrder
    constantValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColumnMappingAvgOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
  }

  export type ColumnMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    standardizedField?: SortOrder
    rawColumnName?: SortOrder
    constantValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColumnMappingMinOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    standardizedField?: SortOrder
    rawColumnName?: SortOrder
    constantValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColumnMappingSumOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StandardizedRecordListRelationFilter = {
    every?: StandardizedRecordWhereInput
    some?: StandardizedRecordWhereInput
    none?: StandardizedRecordWhereInput
  }

  export type StandardizedRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UploadBatchCountOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    fileName?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UploadBatchAvgOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
  }

  export type UploadBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    fileName?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UploadBatchMinOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
    fileName?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UploadBatchSumOrderByAggregateInput = {
    id?: SortOrder
    sourceSystemId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UploadBatchRelationFilter = {
    is?: UploadBatchWhereInput
    isNot?: UploadBatchWhereInput
  }

  export type StandardizedRecordCountOrderByAggregateInput = {
    id?: SortOrder
    uploadBatchId?: SortOrder
    physicianName?: SortOrder
    physicianNpi?: SortOrder
    physicianDesignation?: SortOrder
    transferOfValue?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type StandardizedRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    uploadBatchId?: SortOrder
    amount?: SortOrder
  }

  export type StandardizedRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    uploadBatchId?: SortOrder
    physicianName?: SortOrder
    physicianNpi?: SortOrder
    physicianDesignation?: SortOrder
    transferOfValue?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type StandardizedRecordMinOrderByAggregateInput = {
    id?: SortOrder
    uploadBatchId?: SortOrder
    physicianName?: SortOrder
    physicianNpi?: SortOrder
    physicianDesignation?: SortOrder
    transferOfValue?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type StandardizedRecordSumOrderByAggregateInput = {
    id?: SortOrder
    uploadBatchId?: SortOrder
    amount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SourceSystemCreateNestedManyWithoutClientInput = {
    create?: XOR<SourceSystemCreateWithoutClientInput, SourceSystemUncheckedCreateWithoutClientInput> | SourceSystemCreateWithoutClientInput[] | SourceSystemUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SourceSystemCreateOrConnectWithoutClientInput | SourceSystemCreateOrConnectWithoutClientInput[]
    createMany?: SourceSystemCreateManyClientInputEnvelope
    connect?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
  }

  export type SourceSystemUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SourceSystemCreateWithoutClientInput, SourceSystemUncheckedCreateWithoutClientInput> | SourceSystemCreateWithoutClientInput[] | SourceSystemUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SourceSystemCreateOrConnectWithoutClientInput | SourceSystemCreateOrConnectWithoutClientInput[]
    createMany?: SourceSystemCreateManyClientInputEnvelope
    connect?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SourceSystemUpdateManyWithoutClientNestedInput = {
    create?: XOR<SourceSystemCreateWithoutClientInput, SourceSystemUncheckedCreateWithoutClientInput> | SourceSystemCreateWithoutClientInput[] | SourceSystemUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SourceSystemCreateOrConnectWithoutClientInput | SourceSystemCreateOrConnectWithoutClientInput[]
    upsert?: SourceSystemUpsertWithWhereUniqueWithoutClientInput | SourceSystemUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SourceSystemCreateManyClientInputEnvelope
    set?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
    disconnect?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
    delete?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
    connect?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
    update?: SourceSystemUpdateWithWhereUniqueWithoutClientInput | SourceSystemUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SourceSystemUpdateManyWithWhereWithoutClientInput | SourceSystemUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SourceSystemScalarWhereInput | SourceSystemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SourceSystemUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SourceSystemCreateWithoutClientInput, SourceSystemUncheckedCreateWithoutClientInput> | SourceSystemCreateWithoutClientInput[] | SourceSystemUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SourceSystemCreateOrConnectWithoutClientInput | SourceSystemCreateOrConnectWithoutClientInput[]
    upsert?: SourceSystemUpsertWithWhereUniqueWithoutClientInput | SourceSystemUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SourceSystemCreateManyClientInputEnvelope
    set?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
    disconnect?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
    delete?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
    connect?: SourceSystemWhereUniqueInput | SourceSystemWhereUniqueInput[]
    update?: SourceSystemUpdateWithWhereUniqueWithoutClientInput | SourceSystemUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SourceSystemUpdateManyWithWhereWithoutClientInput | SourceSystemUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SourceSystemScalarWhereInput | SourceSystemScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutSourceSystemsInput = {
    create?: XOR<ClientCreateWithoutSourceSystemsInput, ClientUncheckedCreateWithoutSourceSystemsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSourceSystemsInput
    connect?: ClientWhereUniqueInput
  }

  export type ColumnMappingCreateNestedManyWithoutSourceSystemInput = {
    create?: XOR<ColumnMappingCreateWithoutSourceSystemInput, ColumnMappingUncheckedCreateWithoutSourceSystemInput> | ColumnMappingCreateWithoutSourceSystemInput[] | ColumnMappingUncheckedCreateWithoutSourceSystemInput[]
    connectOrCreate?: ColumnMappingCreateOrConnectWithoutSourceSystemInput | ColumnMappingCreateOrConnectWithoutSourceSystemInput[]
    createMany?: ColumnMappingCreateManySourceSystemInputEnvelope
    connect?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
  }

  export type UploadBatchCreateNestedManyWithoutSourceSystemInput = {
    create?: XOR<UploadBatchCreateWithoutSourceSystemInput, UploadBatchUncheckedCreateWithoutSourceSystemInput> | UploadBatchCreateWithoutSourceSystemInput[] | UploadBatchUncheckedCreateWithoutSourceSystemInput[]
    connectOrCreate?: UploadBatchCreateOrConnectWithoutSourceSystemInput | UploadBatchCreateOrConnectWithoutSourceSystemInput[]
    createMany?: UploadBatchCreateManySourceSystemInputEnvelope
    connect?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
  }

  export type ColumnMappingUncheckedCreateNestedManyWithoutSourceSystemInput = {
    create?: XOR<ColumnMappingCreateWithoutSourceSystemInput, ColumnMappingUncheckedCreateWithoutSourceSystemInput> | ColumnMappingCreateWithoutSourceSystemInput[] | ColumnMappingUncheckedCreateWithoutSourceSystemInput[]
    connectOrCreate?: ColumnMappingCreateOrConnectWithoutSourceSystemInput | ColumnMappingCreateOrConnectWithoutSourceSystemInput[]
    createMany?: ColumnMappingCreateManySourceSystemInputEnvelope
    connect?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
  }

  export type UploadBatchUncheckedCreateNestedManyWithoutSourceSystemInput = {
    create?: XOR<UploadBatchCreateWithoutSourceSystemInput, UploadBatchUncheckedCreateWithoutSourceSystemInput> | UploadBatchCreateWithoutSourceSystemInput[] | UploadBatchUncheckedCreateWithoutSourceSystemInput[]
    connectOrCreate?: UploadBatchCreateOrConnectWithoutSourceSystemInput | UploadBatchCreateOrConnectWithoutSourceSystemInput[]
    createMany?: UploadBatchCreateManySourceSystemInputEnvelope
    connect?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutSourceSystemsNestedInput = {
    create?: XOR<ClientCreateWithoutSourceSystemsInput, ClientUncheckedCreateWithoutSourceSystemsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSourceSystemsInput
    upsert?: ClientUpsertWithoutSourceSystemsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSourceSystemsInput, ClientUpdateWithoutSourceSystemsInput>, ClientUncheckedUpdateWithoutSourceSystemsInput>
  }

  export type ColumnMappingUpdateManyWithoutSourceSystemNestedInput = {
    create?: XOR<ColumnMappingCreateWithoutSourceSystemInput, ColumnMappingUncheckedCreateWithoutSourceSystemInput> | ColumnMappingCreateWithoutSourceSystemInput[] | ColumnMappingUncheckedCreateWithoutSourceSystemInput[]
    connectOrCreate?: ColumnMappingCreateOrConnectWithoutSourceSystemInput | ColumnMappingCreateOrConnectWithoutSourceSystemInput[]
    upsert?: ColumnMappingUpsertWithWhereUniqueWithoutSourceSystemInput | ColumnMappingUpsertWithWhereUniqueWithoutSourceSystemInput[]
    createMany?: ColumnMappingCreateManySourceSystemInputEnvelope
    set?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
    disconnect?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
    delete?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
    connect?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
    update?: ColumnMappingUpdateWithWhereUniqueWithoutSourceSystemInput | ColumnMappingUpdateWithWhereUniqueWithoutSourceSystemInput[]
    updateMany?: ColumnMappingUpdateManyWithWhereWithoutSourceSystemInput | ColumnMappingUpdateManyWithWhereWithoutSourceSystemInput[]
    deleteMany?: ColumnMappingScalarWhereInput | ColumnMappingScalarWhereInput[]
  }

  export type UploadBatchUpdateManyWithoutSourceSystemNestedInput = {
    create?: XOR<UploadBatchCreateWithoutSourceSystemInput, UploadBatchUncheckedCreateWithoutSourceSystemInput> | UploadBatchCreateWithoutSourceSystemInput[] | UploadBatchUncheckedCreateWithoutSourceSystemInput[]
    connectOrCreate?: UploadBatchCreateOrConnectWithoutSourceSystemInput | UploadBatchCreateOrConnectWithoutSourceSystemInput[]
    upsert?: UploadBatchUpsertWithWhereUniqueWithoutSourceSystemInput | UploadBatchUpsertWithWhereUniqueWithoutSourceSystemInput[]
    createMany?: UploadBatchCreateManySourceSystemInputEnvelope
    set?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
    disconnect?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
    delete?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
    connect?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
    update?: UploadBatchUpdateWithWhereUniqueWithoutSourceSystemInput | UploadBatchUpdateWithWhereUniqueWithoutSourceSystemInput[]
    updateMany?: UploadBatchUpdateManyWithWhereWithoutSourceSystemInput | UploadBatchUpdateManyWithWhereWithoutSourceSystemInput[]
    deleteMany?: UploadBatchScalarWhereInput | UploadBatchScalarWhereInput[]
  }

  export type ColumnMappingUncheckedUpdateManyWithoutSourceSystemNestedInput = {
    create?: XOR<ColumnMappingCreateWithoutSourceSystemInput, ColumnMappingUncheckedCreateWithoutSourceSystemInput> | ColumnMappingCreateWithoutSourceSystemInput[] | ColumnMappingUncheckedCreateWithoutSourceSystemInput[]
    connectOrCreate?: ColumnMappingCreateOrConnectWithoutSourceSystemInput | ColumnMappingCreateOrConnectWithoutSourceSystemInput[]
    upsert?: ColumnMappingUpsertWithWhereUniqueWithoutSourceSystemInput | ColumnMappingUpsertWithWhereUniqueWithoutSourceSystemInput[]
    createMany?: ColumnMappingCreateManySourceSystemInputEnvelope
    set?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
    disconnect?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
    delete?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
    connect?: ColumnMappingWhereUniqueInput | ColumnMappingWhereUniqueInput[]
    update?: ColumnMappingUpdateWithWhereUniqueWithoutSourceSystemInput | ColumnMappingUpdateWithWhereUniqueWithoutSourceSystemInput[]
    updateMany?: ColumnMappingUpdateManyWithWhereWithoutSourceSystemInput | ColumnMappingUpdateManyWithWhereWithoutSourceSystemInput[]
    deleteMany?: ColumnMappingScalarWhereInput | ColumnMappingScalarWhereInput[]
  }

  export type UploadBatchUncheckedUpdateManyWithoutSourceSystemNestedInput = {
    create?: XOR<UploadBatchCreateWithoutSourceSystemInput, UploadBatchUncheckedCreateWithoutSourceSystemInput> | UploadBatchCreateWithoutSourceSystemInput[] | UploadBatchUncheckedCreateWithoutSourceSystemInput[]
    connectOrCreate?: UploadBatchCreateOrConnectWithoutSourceSystemInput | UploadBatchCreateOrConnectWithoutSourceSystemInput[]
    upsert?: UploadBatchUpsertWithWhereUniqueWithoutSourceSystemInput | UploadBatchUpsertWithWhereUniqueWithoutSourceSystemInput[]
    createMany?: UploadBatchCreateManySourceSystemInputEnvelope
    set?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
    disconnect?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
    delete?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
    connect?: UploadBatchWhereUniqueInput | UploadBatchWhereUniqueInput[]
    update?: UploadBatchUpdateWithWhereUniqueWithoutSourceSystemInput | UploadBatchUpdateWithWhereUniqueWithoutSourceSystemInput[]
    updateMany?: UploadBatchUpdateManyWithWhereWithoutSourceSystemInput | UploadBatchUpdateManyWithWhereWithoutSourceSystemInput[]
    deleteMany?: UploadBatchScalarWhereInput | UploadBatchScalarWhereInput[]
  }

  export type SourceSystemCreateNestedOneWithoutColumnMappingsInput = {
    create?: XOR<SourceSystemCreateWithoutColumnMappingsInput, SourceSystemUncheckedCreateWithoutColumnMappingsInput>
    connectOrCreate?: SourceSystemCreateOrConnectWithoutColumnMappingsInput
    connect?: SourceSystemWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SourceSystemUpdateOneRequiredWithoutColumnMappingsNestedInput = {
    create?: XOR<SourceSystemCreateWithoutColumnMappingsInput, SourceSystemUncheckedCreateWithoutColumnMappingsInput>
    connectOrCreate?: SourceSystemCreateOrConnectWithoutColumnMappingsInput
    upsert?: SourceSystemUpsertWithoutColumnMappingsInput
    connect?: SourceSystemWhereUniqueInput
    update?: XOR<XOR<SourceSystemUpdateToOneWithWhereWithoutColumnMappingsInput, SourceSystemUpdateWithoutColumnMappingsInput>, SourceSystemUncheckedUpdateWithoutColumnMappingsInput>
  }

  export type SourceSystemCreateNestedOneWithoutUploadBatchesInput = {
    create?: XOR<SourceSystemCreateWithoutUploadBatchesInput, SourceSystemUncheckedCreateWithoutUploadBatchesInput>
    connectOrCreate?: SourceSystemCreateOrConnectWithoutUploadBatchesInput
    connect?: SourceSystemWhereUniqueInput
  }

  export type StandardizedRecordCreateNestedManyWithoutUploadBatchInput = {
    create?: XOR<StandardizedRecordCreateWithoutUploadBatchInput, StandardizedRecordUncheckedCreateWithoutUploadBatchInput> | StandardizedRecordCreateWithoutUploadBatchInput[] | StandardizedRecordUncheckedCreateWithoutUploadBatchInput[]
    connectOrCreate?: StandardizedRecordCreateOrConnectWithoutUploadBatchInput | StandardizedRecordCreateOrConnectWithoutUploadBatchInput[]
    createMany?: StandardizedRecordCreateManyUploadBatchInputEnvelope
    connect?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
  }

  export type StandardizedRecordUncheckedCreateNestedManyWithoutUploadBatchInput = {
    create?: XOR<StandardizedRecordCreateWithoutUploadBatchInput, StandardizedRecordUncheckedCreateWithoutUploadBatchInput> | StandardizedRecordCreateWithoutUploadBatchInput[] | StandardizedRecordUncheckedCreateWithoutUploadBatchInput[]
    connectOrCreate?: StandardizedRecordCreateOrConnectWithoutUploadBatchInput | StandardizedRecordCreateOrConnectWithoutUploadBatchInput[]
    createMany?: StandardizedRecordCreateManyUploadBatchInputEnvelope
    connect?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
  }

  export type SourceSystemUpdateOneRequiredWithoutUploadBatchesNestedInput = {
    create?: XOR<SourceSystemCreateWithoutUploadBatchesInput, SourceSystemUncheckedCreateWithoutUploadBatchesInput>
    connectOrCreate?: SourceSystemCreateOrConnectWithoutUploadBatchesInput
    upsert?: SourceSystemUpsertWithoutUploadBatchesInput
    connect?: SourceSystemWhereUniqueInput
    update?: XOR<XOR<SourceSystemUpdateToOneWithWhereWithoutUploadBatchesInput, SourceSystemUpdateWithoutUploadBatchesInput>, SourceSystemUncheckedUpdateWithoutUploadBatchesInput>
  }

  export type StandardizedRecordUpdateManyWithoutUploadBatchNestedInput = {
    create?: XOR<StandardizedRecordCreateWithoutUploadBatchInput, StandardizedRecordUncheckedCreateWithoutUploadBatchInput> | StandardizedRecordCreateWithoutUploadBatchInput[] | StandardizedRecordUncheckedCreateWithoutUploadBatchInput[]
    connectOrCreate?: StandardizedRecordCreateOrConnectWithoutUploadBatchInput | StandardizedRecordCreateOrConnectWithoutUploadBatchInput[]
    upsert?: StandardizedRecordUpsertWithWhereUniqueWithoutUploadBatchInput | StandardizedRecordUpsertWithWhereUniqueWithoutUploadBatchInput[]
    createMany?: StandardizedRecordCreateManyUploadBatchInputEnvelope
    set?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
    disconnect?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
    delete?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
    connect?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
    update?: StandardizedRecordUpdateWithWhereUniqueWithoutUploadBatchInput | StandardizedRecordUpdateWithWhereUniqueWithoutUploadBatchInput[]
    updateMany?: StandardizedRecordUpdateManyWithWhereWithoutUploadBatchInput | StandardizedRecordUpdateManyWithWhereWithoutUploadBatchInput[]
    deleteMany?: StandardizedRecordScalarWhereInput | StandardizedRecordScalarWhereInput[]
  }

  export type StandardizedRecordUncheckedUpdateManyWithoutUploadBatchNestedInput = {
    create?: XOR<StandardizedRecordCreateWithoutUploadBatchInput, StandardizedRecordUncheckedCreateWithoutUploadBatchInput> | StandardizedRecordCreateWithoutUploadBatchInput[] | StandardizedRecordUncheckedCreateWithoutUploadBatchInput[]
    connectOrCreate?: StandardizedRecordCreateOrConnectWithoutUploadBatchInput | StandardizedRecordCreateOrConnectWithoutUploadBatchInput[]
    upsert?: StandardizedRecordUpsertWithWhereUniqueWithoutUploadBatchInput | StandardizedRecordUpsertWithWhereUniqueWithoutUploadBatchInput[]
    createMany?: StandardizedRecordCreateManyUploadBatchInputEnvelope
    set?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
    disconnect?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
    delete?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
    connect?: StandardizedRecordWhereUniqueInput | StandardizedRecordWhereUniqueInput[]
    update?: StandardizedRecordUpdateWithWhereUniqueWithoutUploadBatchInput | StandardizedRecordUpdateWithWhereUniqueWithoutUploadBatchInput[]
    updateMany?: StandardizedRecordUpdateManyWithWhereWithoutUploadBatchInput | StandardizedRecordUpdateManyWithWhereWithoutUploadBatchInput[]
    deleteMany?: StandardizedRecordScalarWhereInput | StandardizedRecordScalarWhereInput[]
  }

  export type UploadBatchCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UploadBatchCreateWithoutRecordsInput, UploadBatchUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UploadBatchCreateOrConnectWithoutRecordsInput
    connect?: UploadBatchWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UploadBatchUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<UploadBatchCreateWithoutRecordsInput, UploadBatchUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UploadBatchCreateOrConnectWithoutRecordsInput
    upsert?: UploadBatchUpsertWithoutRecordsInput
    connect?: UploadBatchWhereUniqueInput
    update?: XOR<XOR<UploadBatchUpdateToOneWithWhereWithoutRecordsInput, UploadBatchUpdateWithoutRecordsInput>, UploadBatchUncheckedUpdateWithoutRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SourceSystemCreateWithoutClientInput = {
    name: string
    createdAt?: Date | string
    columnMappings?: ColumnMappingCreateNestedManyWithoutSourceSystemInput
    uploadBatches?: UploadBatchCreateNestedManyWithoutSourceSystemInput
  }

  export type SourceSystemUncheckedCreateWithoutClientInput = {
    id?: number
    name: string
    createdAt?: Date | string
    columnMappings?: ColumnMappingUncheckedCreateNestedManyWithoutSourceSystemInput
    uploadBatches?: UploadBatchUncheckedCreateNestedManyWithoutSourceSystemInput
  }

  export type SourceSystemCreateOrConnectWithoutClientInput = {
    where: SourceSystemWhereUniqueInput
    create: XOR<SourceSystemCreateWithoutClientInput, SourceSystemUncheckedCreateWithoutClientInput>
  }

  export type SourceSystemCreateManyClientInputEnvelope = {
    data: SourceSystemCreateManyClientInput | SourceSystemCreateManyClientInput[]
  }

  export type SourceSystemUpsertWithWhereUniqueWithoutClientInput = {
    where: SourceSystemWhereUniqueInput
    update: XOR<SourceSystemUpdateWithoutClientInput, SourceSystemUncheckedUpdateWithoutClientInput>
    create: XOR<SourceSystemCreateWithoutClientInput, SourceSystemUncheckedCreateWithoutClientInput>
  }

  export type SourceSystemUpdateWithWhereUniqueWithoutClientInput = {
    where: SourceSystemWhereUniqueInput
    data: XOR<SourceSystemUpdateWithoutClientInput, SourceSystemUncheckedUpdateWithoutClientInput>
  }

  export type SourceSystemUpdateManyWithWhereWithoutClientInput = {
    where: SourceSystemScalarWhereInput
    data: XOR<SourceSystemUpdateManyMutationInput, SourceSystemUncheckedUpdateManyWithoutClientInput>
  }

  export type SourceSystemScalarWhereInput = {
    AND?: SourceSystemScalarWhereInput | SourceSystemScalarWhereInput[]
    OR?: SourceSystemScalarWhereInput[]
    NOT?: SourceSystemScalarWhereInput | SourceSystemScalarWhereInput[]
    id?: IntFilter<"SourceSystem"> | number
    clientId?: IntFilter<"SourceSystem"> | number
    name?: StringFilter<"SourceSystem"> | string
    createdAt?: DateTimeFilter<"SourceSystem"> | Date | string
  }

  export type ClientCreateWithoutSourceSystemsInput = {
    name: string
    createdAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutSourceSystemsInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutSourceSystemsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSourceSystemsInput, ClientUncheckedCreateWithoutSourceSystemsInput>
  }

  export type ColumnMappingCreateWithoutSourceSystemInput = {
    standardizedField: string
    rawColumnName: string
    constantValue?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColumnMappingUncheckedCreateWithoutSourceSystemInput = {
    id?: number
    standardizedField: string
    rawColumnName: string
    constantValue?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColumnMappingCreateOrConnectWithoutSourceSystemInput = {
    where: ColumnMappingWhereUniqueInput
    create: XOR<ColumnMappingCreateWithoutSourceSystemInput, ColumnMappingUncheckedCreateWithoutSourceSystemInput>
  }

  export type ColumnMappingCreateManySourceSystemInputEnvelope = {
    data: ColumnMappingCreateManySourceSystemInput | ColumnMappingCreateManySourceSystemInput[]
  }

  export type UploadBatchCreateWithoutSourceSystemInput = {
    fileName?: string | null
    uploadedAt?: Date | string
    records?: StandardizedRecordCreateNestedManyWithoutUploadBatchInput
  }

  export type UploadBatchUncheckedCreateWithoutSourceSystemInput = {
    id?: number
    fileName?: string | null
    uploadedAt?: Date | string
    records?: StandardizedRecordUncheckedCreateNestedManyWithoutUploadBatchInput
  }

  export type UploadBatchCreateOrConnectWithoutSourceSystemInput = {
    where: UploadBatchWhereUniqueInput
    create: XOR<UploadBatchCreateWithoutSourceSystemInput, UploadBatchUncheckedCreateWithoutSourceSystemInput>
  }

  export type UploadBatchCreateManySourceSystemInputEnvelope = {
    data: UploadBatchCreateManySourceSystemInput | UploadBatchCreateManySourceSystemInput[]
  }

  export type ClientUpsertWithoutSourceSystemsInput = {
    update: XOR<ClientUpdateWithoutSourceSystemsInput, ClientUncheckedUpdateWithoutSourceSystemsInput>
    create: XOR<ClientCreateWithoutSourceSystemsInput, ClientUncheckedCreateWithoutSourceSystemsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSourceSystemsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSourceSystemsInput, ClientUncheckedUpdateWithoutSourceSystemsInput>
  }

  export type ClientUpdateWithoutSourceSystemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutSourceSystemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMappingUpsertWithWhereUniqueWithoutSourceSystemInput = {
    where: ColumnMappingWhereUniqueInput
    update: XOR<ColumnMappingUpdateWithoutSourceSystemInput, ColumnMappingUncheckedUpdateWithoutSourceSystemInput>
    create: XOR<ColumnMappingCreateWithoutSourceSystemInput, ColumnMappingUncheckedCreateWithoutSourceSystemInput>
  }

  export type ColumnMappingUpdateWithWhereUniqueWithoutSourceSystemInput = {
    where: ColumnMappingWhereUniqueInput
    data: XOR<ColumnMappingUpdateWithoutSourceSystemInput, ColumnMappingUncheckedUpdateWithoutSourceSystemInput>
  }

  export type ColumnMappingUpdateManyWithWhereWithoutSourceSystemInput = {
    where: ColumnMappingScalarWhereInput
    data: XOR<ColumnMappingUpdateManyMutationInput, ColumnMappingUncheckedUpdateManyWithoutSourceSystemInput>
  }

  export type ColumnMappingScalarWhereInput = {
    AND?: ColumnMappingScalarWhereInput | ColumnMappingScalarWhereInput[]
    OR?: ColumnMappingScalarWhereInput[]
    NOT?: ColumnMappingScalarWhereInput | ColumnMappingScalarWhereInput[]
    id?: IntFilter<"ColumnMapping"> | number
    sourceSystemId?: IntFilter<"ColumnMapping"> | number
    standardizedField?: StringFilter<"ColumnMapping"> | string
    rawColumnName?: StringFilter<"ColumnMapping"> | string
    constantValue?: StringNullableFilter<"ColumnMapping"> | string | null
    createdAt?: DateTimeFilter<"ColumnMapping"> | Date | string
    updatedAt?: DateTimeFilter<"ColumnMapping"> | Date | string
  }

  export type UploadBatchUpsertWithWhereUniqueWithoutSourceSystemInput = {
    where: UploadBatchWhereUniqueInput
    update: XOR<UploadBatchUpdateWithoutSourceSystemInput, UploadBatchUncheckedUpdateWithoutSourceSystemInput>
    create: XOR<UploadBatchCreateWithoutSourceSystemInput, UploadBatchUncheckedCreateWithoutSourceSystemInput>
  }

  export type UploadBatchUpdateWithWhereUniqueWithoutSourceSystemInput = {
    where: UploadBatchWhereUniqueInput
    data: XOR<UploadBatchUpdateWithoutSourceSystemInput, UploadBatchUncheckedUpdateWithoutSourceSystemInput>
  }

  export type UploadBatchUpdateManyWithWhereWithoutSourceSystemInput = {
    where: UploadBatchScalarWhereInput
    data: XOR<UploadBatchUpdateManyMutationInput, UploadBatchUncheckedUpdateManyWithoutSourceSystemInput>
  }

  export type UploadBatchScalarWhereInput = {
    AND?: UploadBatchScalarWhereInput | UploadBatchScalarWhereInput[]
    OR?: UploadBatchScalarWhereInput[]
    NOT?: UploadBatchScalarWhereInput | UploadBatchScalarWhereInput[]
    id?: IntFilter<"UploadBatch"> | number
    sourceSystemId?: IntFilter<"UploadBatch"> | number
    fileName?: StringNullableFilter<"UploadBatch"> | string | null
    uploadedAt?: DateTimeFilter<"UploadBatch"> | Date | string
  }

  export type SourceSystemCreateWithoutColumnMappingsInput = {
    name: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutSourceSystemsInput
    uploadBatches?: UploadBatchCreateNestedManyWithoutSourceSystemInput
  }

  export type SourceSystemUncheckedCreateWithoutColumnMappingsInput = {
    id?: number
    clientId: number
    name: string
    createdAt?: Date | string
    uploadBatches?: UploadBatchUncheckedCreateNestedManyWithoutSourceSystemInput
  }

  export type SourceSystemCreateOrConnectWithoutColumnMappingsInput = {
    where: SourceSystemWhereUniqueInput
    create: XOR<SourceSystemCreateWithoutColumnMappingsInput, SourceSystemUncheckedCreateWithoutColumnMappingsInput>
  }

  export type SourceSystemUpsertWithoutColumnMappingsInput = {
    update: XOR<SourceSystemUpdateWithoutColumnMappingsInput, SourceSystemUncheckedUpdateWithoutColumnMappingsInput>
    create: XOR<SourceSystemCreateWithoutColumnMappingsInput, SourceSystemUncheckedCreateWithoutColumnMappingsInput>
    where?: SourceSystemWhereInput
  }

  export type SourceSystemUpdateToOneWithWhereWithoutColumnMappingsInput = {
    where?: SourceSystemWhereInput
    data: XOR<SourceSystemUpdateWithoutColumnMappingsInput, SourceSystemUncheckedUpdateWithoutColumnMappingsInput>
  }

  export type SourceSystemUpdateWithoutColumnMappingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSourceSystemsNestedInput
    uploadBatches?: UploadBatchUpdateManyWithoutSourceSystemNestedInput
  }

  export type SourceSystemUncheckedUpdateWithoutColumnMappingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadBatches?: UploadBatchUncheckedUpdateManyWithoutSourceSystemNestedInput
  }

  export type SourceSystemCreateWithoutUploadBatchesInput = {
    name: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutSourceSystemsInput
    columnMappings?: ColumnMappingCreateNestedManyWithoutSourceSystemInput
  }

  export type SourceSystemUncheckedCreateWithoutUploadBatchesInput = {
    id?: number
    clientId: number
    name: string
    createdAt?: Date | string
    columnMappings?: ColumnMappingUncheckedCreateNestedManyWithoutSourceSystemInput
  }

  export type SourceSystemCreateOrConnectWithoutUploadBatchesInput = {
    where: SourceSystemWhereUniqueInput
    create: XOR<SourceSystemCreateWithoutUploadBatchesInput, SourceSystemUncheckedCreateWithoutUploadBatchesInput>
  }

  export type StandardizedRecordCreateWithoutUploadBatchInput = {
    physicianName?: string | null
    physicianNpi?: string | null
    physicianDesignation?: string | null
    transferOfValue?: string | null
    amount?: number | null
    date?: string | null
  }

  export type StandardizedRecordUncheckedCreateWithoutUploadBatchInput = {
    id?: number
    physicianName?: string | null
    physicianNpi?: string | null
    physicianDesignation?: string | null
    transferOfValue?: string | null
    amount?: number | null
    date?: string | null
  }

  export type StandardizedRecordCreateOrConnectWithoutUploadBatchInput = {
    where: StandardizedRecordWhereUniqueInput
    create: XOR<StandardizedRecordCreateWithoutUploadBatchInput, StandardizedRecordUncheckedCreateWithoutUploadBatchInput>
  }

  export type StandardizedRecordCreateManyUploadBatchInputEnvelope = {
    data: StandardizedRecordCreateManyUploadBatchInput | StandardizedRecordCreateManyUploadBatchInput[]
  }

  export type SourceSystemUpsertWithoutUploadBatchesInput = {
    update: XOR<SourceSystemUpdateWithoutUploadBatchesInput, SourceSystemUncheckedUpdateWithoutUploadBatchesInput>
    create: XOR<SourceSystemCreateWithoutUploadBatchesInput, SourceSystemUncheckedCreateWithoutUploadBatchesInput>
    where?: SourceSystemWhereInput
  }

  export type SourceSystemUpdateToOneWithWhereWithoutUploadBatchesInput = {
    where?: SourceSystemWhereInput
    data: XOR<SourceSystemUpdateWithoutUploadBatchesInput, SourceSystemUncheckedUpdateWithoutUploadBatchesInput>
  }

  export type SourceSystemUpdateWithoutUploadBatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSourceSystemsNestedInput
    columnMappings?: ColumnMappingUpdateManyWithoutSourceSystemNestedInput
  }

  export type SourceSystemUncheckedUpdateWithoutUploadBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnMappings?: ColumnMappingUncheckedUpdateManyWithoutSourceSystemNestedInput
  }

  export type StandardizedRecordUpsertWithWhereUniqueWithoutUploadBatchInput = {
    where: StandardizedRecordWhereUniqueInput
    update: XOR<StandardizedRecordUpdateWithoutUploadBatchInput, StandardizedRecordUncheckedUpdateWithoutUploadBatchInput>
    create: XOR<StandardizedRecordCreateWithoutUploadBatchInput, StandardizedRecordUncheckedCreateWithoutUploadBatchInput>
  }

  export type StandardizedRecordUpdateWithWhereUniqueWithoutUploadBatchInput = {
    where: StandardizedRecordWhereUniqueInput
    data: XOR<StandardizedRecordUpdateWithoutUploadBatchInput, StandardizedRecordUncheckedUpdateWithoutUploadBatchInput>
  }

  export type StandardizedRecordUpdateManyWithWhereWithoutUploadBatchInput = {
    where: StandardizedRecordScalarWhereInput
    data: XOR<StandardizedRecordUpdateManyMutationInput, StandardizedRecordUncheckedUpdateManyWithoutUploadBatchInput>
  }

  export type StandardizedRecordScalarWhereInput = {
    AND?: StandardizedRecordScalarWhereInput | StandardizedRecordScalarWhereInput[]
    OR?: StandardizedRecordScalarWhereInput[]
    NOT?: StandardizedRecordScalarWhereInput | StandardizedRecordScalarWhereInput[]
    id?: IntFilter<"StandardizedRecord"> | number
    uploadBatchId?: IntFilter<"StandardizedRecord"> | number
    physicianName?: StringNullableFilter<"StandardizedRecord"> | string | null
    physicianNpi?: StringNullableFilter<"StandardizedRecord"> | string | null
    physicianDesignation?: StringNullableFilter<"StandardizedRecord"> | string | null
    transferOfValue?: StringNullableFilter<"StandardizedRecord"> | string | null
    amount?: FloatNullableFilter<"StandardizedRecord"> | number | null
    date?: StringNullableFilter<"StandardizedRecord"> | string | null
  }

  export type UploadBatchCreateWithoutRecordsInput = {
    fileName?: string | null
    uploadedAt?: Date | string
    sourceSystem: SourceSystemCreateNestedOneWithoutUploadBatchesInput
  }

  export type UploadBatchUncheckedCreateWithoutRecordsInput = {
    id?: number
    sourceSystemId: number
    fileName?: string | null
    uploadedAt?: Date | string
  }

  export type UploadBatchCreateOrConnectWithoutRecordsInput = {
    where: UploadBatchWhereUniqueInput
    create: XOR<UploadBatchCreateWithoutRecordsInput, UploadBatchUncheckedCreateWithoutRecordsInput>
  }

  export type UploadBatchUpsertWithoutRecordsInput = {
    update: XOR<UploadBatchUpdateWithoutRecordsInput, UploadBatchUncheckedUpdateWithoutRecordsInput>
    create: XOR<UploadBatchCreateWithoutRecordsInput, UploadBatchUncheckedCreateWithoutRecordsInput>
    where?: UploadBatchWhereInput
  }

  export type UploadBatchUpdateToOneWithWhereWithoutRecordsInput = {
    where?: UploadBatchWhereInput
    data: XOR<UploadBatchUpdateWithoutRecordsInput, UploadBatchUncheckedUpdateWithoutRecordsInput>
  }

  export type UploadBatchUpdateWithoutRecordsInput = {
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceSystem?: SourceSystemUpdateOneRequiredWithoutUploadBatchesNestedInput
  }

  export type UploadBatchUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystemId?: IntFieldUpdateOperationsInput | number
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceSystemCreateManyClientInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type SourceSystemUpdateWithoutClientInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnMappings?: ColumnMappingUpdateManyWithoutSourceSystemNestedInput
    uploadBatches?: UploadBatchUpdateManyWithoutSourceSystemNestedInput
  }

  export type SourceSystemUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnMappings?: ColumnMappingUncheckedUpdateManyWithoutSourceSystemNestedInput
    uploadBatches?: UploadBatchUncheckedUpdateManyWithoutSourceSystemNestedInput
  }

  export type SourceSystemUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMappingCreateManySourceSystemInput = {
    id?: number
    standardizedField: string
    rawColumnName: string
    constantValue?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadBatchCreateManySourceSystemInput = {
    id?: number
    fileName?: string | null
    uploadedAt?: Date | string
  }

  export type ColumnMappingUpdateWithoutSourceSystemInput = {
    standardizedField?: StringFieldUpdateOperationsInput | string
    rawColumnName?: StringFieldUpdateOperationsInput | string
    constantValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMappingUncheckedUpdateWithoutSourceSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    standardizedField?: StringFieldUpdateOperationsInput | string
    rawColumnName?: StringFieldUpdateOperationsInput | string
    constantValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMappingUncheckedUpdateManyWithoutSourceSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    standardizedField?: StringFieldUpdateOperationsInput | string
    rawColumnName?: StringFieldUpdateOperationsInput | string
    constantValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadBatchUpdateWithoutSourceSystemInput = {
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: StandardizedRecordUpdateManyWithoutUploadBatchNestedInput
  }

  export type UploadBatchUncheckedUpdateWithoutSourceSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: StandardizedRecordUncheckedUpdateManyWithoutUploadBatchNestedInput
  }

  export type UploadBatchUncheckedUpdateManyWithoutSourceSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandardizedRecordCreateManyUploadBatchInput = {
    id?: number
    physicianName?: string | null
    physicianNpi?: string | null
    physicianDesignation?: string | null
    transferOfValue?: string | null
    amount?: number | null
    date?: string | null
  }

  export type StandardizedRecordUpdateWithoutUploadBatchInput = {
    physicianName?: NullableStringFieldUpdateOperationsInput | string | null
    physicianNpi?: NullableStringFieldUpdateOperationsInput | string | null
    physicianDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    transferOfValue?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StandardizedRecordUncheckedUpdateWithoutUploadBatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    physicianName?: NullableStringFieldUpdateOperationsInput | string | null
    physicianNpi?: NullableStringFieldUpdateOperationsInput | string | null
    physicianDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    transferOfValue?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StandardizedRecordUncheckedUpdateManyWithoutUploadBatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    physicianName?: NullableStringFieldUpdateOperationsInput | string | null
    physicianNpi?: NullableStringFieldUpdateOperationsInput | string | null
    physicianDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    transferOfValue?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SourceSystemCountOutputTypeDefaultArgs instead
     */
    export type SourceSystemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SourceSystemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UploadBatchCountOutputTypeDefaultArgs instead
     */
    export type UploadBatchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UploadBatchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SourceSystemDefaultArgs instead
     */
    export type SourceSystemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SourceSystemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ColumnMappingDefaultArgs instead
     */
    export type ColumnMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ColumnMappingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UploadBatchDefaultArgs instead
     */
    export type UploadBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UploadBatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StandardizedRecordDefaultArgs instead
     */
    export type StandardizedRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StandardizedRecordDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}