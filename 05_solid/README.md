# The SOLID Principles on the example of the [Node.js](https://github.com/nestjs/nest) framework

##### 1. Single Responsibility Principle
 
| Correct usage                                                                                                          | Violated usage                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [StreamableFile](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/file-stream/streamable-file.ts#L3-L24) | [ExpressAdapter](https://github.com/nestjs/nest/blob/664f531d2a/packages/platform-express/adapters/express-adapter.ts#L16-L169)                 |
| [all pipes](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/pipes/)                                     | [ListenersController](https://github.com/nestjs/nest/blob/664f531d2a/packages/microservices/listeners-controller.ts#L36-L214)                   |
| [HttpService](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/http/http.service.ts#L16-L113)            | [ClassSerializerInterceptor](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/serializer/class-serializer.interceptor.ts#L22-L88) |

		
##### 2. Open / Closed Principle
   
| Correct usage                                                                                                         | Violated usage                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AbstractHttpAdapter](https://github.com/nestjs/nest/blob/664f531d2a/packages/core/adapters/http-adapter.ts#L95-L119) | [SseStream](https://github.com/nestjs/nest/blob/664f531d2a/packages/core/router/sse-stream.ts#L92-L105)                                                                                              |
| [ModuleRef](https://github.com/nestjs/nest/blob/664f531d2a/packages/core/injector/module-ref.ts#L11-L134)             | [ClientGrpcProxy](https://github.com/nestjs/nest/blob/664f531d2a/packages/microservices/client/client-grpc.ts#L324-L331) overrides send method from ClientProxy                                      |
| [ClientProxy](https://github.com/nestjs/nest/blob/664f531d2a/packages/microservices/client/client-proxy.ts#L35-L165)  | [ClientKafka](https://github.com/nestjs/nest/blob/664f531d2a/packages/microservices/client/client-kafka.ts#L268-L276) overrides initializeSerializer/initializeDeserializer methods from ClientProxy |

##### 3. Liskov Substitution Principle

| Correct usage                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| [BadRequestException](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/exceptions/bad-request.exception.ts)                    |
| [HttpException](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/exceptions/http.exception.ts)                                 |
| [... extends RuntimeException](https://github.com/nestjs/nest/tree/664f531d2a1b34217ea5e786539f7ee329acffd5/packages/core/errors/exceptions) |

##### 4. Liskov Substitution Principle

| Correct usage                                                                                                                                        | Violated usage                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ExceptionFilter](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/interfaces/exceptions/exception-filter.interface.ts#L10-L19)        | [ArgumentsHost](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/interfaces/features/arguments-host.interface.ts#L60-L89)            |
| [RpcExceptionFilter](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/interfaces/exceptions/rpc-exception-filter.interface.ts#L11-L20) | [INestApplicationContext](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/interfaces/nest-application-context.interface.ts#L12-L82) |
| [WsExceptionFilter](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/interfaces/exceptions/ws-exception-filter.interface.ts#L11-L20)   | [INestApplication](https://github.com/nestjs/nest/blob/664f531d2a/packages/common/interfaces/nest-application.interface.ts#L24-L186)               |
	
##### 5. Dependency Inversion Principle			

| Correct usage                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ApplicationConfig](https://github.com/nestjs/nest/blob/664f531d2a/packages/core/application-config.ts#L16) - contains globalPipes array (ParseArrayPipe, UserByIdPipe and etc.) which implements PipeTransform                                  |
| [ApplicationConfig](https://github.com/nestjs/nest/blob/664f531d2a/packages/core/application-config.ts#L18) - contains globalInterceptors array (DataInterceptor, CacheInterceptor, ClassSerializerInterceptor) which implements NestInterceptor |
| [ApplicationConfig](https://github.com/nestjs/nest/blob/664f531d2a/packages/core/application-config.ts#L19) - contains globalGuards array (AuthGuard, RolesGuard and etc.) which implements CanActivate                                          |

