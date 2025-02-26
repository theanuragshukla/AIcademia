# org.openapitools.client - Kotlin client library for Aicademia

Empower your learning journey. Join a thriving community of learners,share expertise, and elevate your education together

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [openapi-spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate an API client.

- API version: 1.0
- Package version: 
- Build package: org.openapitools.codegen.languages.KotlinClientCodegen

## Requires

* Kotlin 1.7.21
* Gradle 7.5

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a id="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**appControllerGetHello**](docs/DefaultApi.md#appcontrollergethello) | **GET**  | 
*GeminiApi* | [**geminiControllerEnqueueContentGen**](docs/GeminiApi.md#geminicontrollerenqueuecontentgen) | **POST** enqueue_content | 
*GeminiApi* | [**geminiControllerEnqueueQuizGen**](docs/GeminiApi.md#geminicontrollerenqueuequizgen) | **POST** enqueue_quiz | 
*GeminiApi* | [**geminiControllerGetContent**](docs/GeminiApi.md#geminicontrollergetcontent) | **GET** content | 
*GeminiApi* | [**geminiControllerNotifyUser**](docs/GeminiApi.md#geminicontrollernotifyuser) | **GET** notify | 
*GeminiApi* | [**geminiControllerUpdateContent**](docs/GeminiApi.md#geminicontrollerupdatecontent) | **GET** update_content | 
*GeminiApi* | [**geminiControllerUpdateQuiz**](docs/GeminiApi.md#geminicontrollerupdatequiz) | **GET** update_quiz | 


<a id="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.ApiResponseModel](docs/ApiResponseModel.md)
 - [org.openapitools.client.models.ContentModel](docs/ContentModel.md)
 - [org.openapitools.client.models.ContentModelContent](docs/ContentModelContent.md)
 - [org.openapitools.client.models.GetContentResponse](docs/GetContentResponse.md)
 - [org.openapitools.client.models.GetQuizResponse](docs/GetQuizResponse.md)
 - [org.openapitools.client.models.QueueMessage](docs/QueueMessage.md)
 - [org.openapitools.client.models.QuizModel](docs/QuizModel.md)


<a id="documentation-for-authorization"></a>
## Documentation for Authorization

Endpoints do not require authorization.

