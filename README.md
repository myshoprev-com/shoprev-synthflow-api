# Shoprev Synthflow API Third Party Integrations
An API to be used by Synthflow for Third-Party Integration

## Installation
Use the package manager npm to install npm packages, npm can be installed when directly downloading [node](https://nodejs.org/en/download) or node through [nvm](https://github.com/nvm-sh/nvm).

```bash
$ npm install
```

## Environment Variables
| Name                      | Type   | Notes                            | Example                          |
| ------------------------  | ------ | -------------------------------- | -------------------------------- |
| `SHOPMONKEY_BEARER_TOKEN` | string | API Access Key for Shopmonkey    | a8F3kL92mN6pQ1rS4tUv7wX0yZ5bC1dE |
| `SSL_CERT`                | string | file path to the ssl certificate | /path/to/certificate             |
| `SSL_KEY`                 | string | file path to the ssl key         | /path/to/key                     |
| `HTTPS_PORT`              | number | Port to listen to for HTTPS      | 8912                             |
| `HTTP_PORT`               | number | Port to listen to for HTTP       | 3547                             |

## Usage
### Configure & Run API Server
``` bash
# compile the code
$ npm run build

# start the server
$ SHOPMONKEY_BEARER_TOKEN=apiaccesskey SSL_CERT=/path/to/certificate SSL_KEY=/path/to/key HTTPS_PORT=PORT# HTTP_PORT=PORT# npm run start
```

### API Routes & Usage
#### Health Check Routes
<details>
	<summary>
		<code>POST</code>
		<code>
			<b>/v1/health/post</b>
		</code>
		<code>(check that the server is running and can POST to it)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `POST request endpoint`                                             |

##### Example cURL
> ```bash
> curl -X POST -H "Content-Type: application/json" http://localhost:8000/v1/health/post
> ```
</details>

<br>

<details>
	<summary>
		<code>GET</code>
		<code>
			<b>/v1/health/get</b>
		</code>
		<code>(check that the server is running and can GET to it)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `GET request endpoint`                                              |

##### Example cURL
> ```bash
> curl -X GET -H "Content-Type: application/json" http://localhost:8000/v1/health/get
> ```
</details>

<br>

<details>
	<summary>
		<code>PATCH</code>
		<code>
			<b>/v1/health/patch</b>
		</code>
		<code>(check that the server is running and can PATCH to it)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `PATCH request endpoint`                                            |

##### Example cURL
> ```bash
> curl -X PATCH -H "Content-Type: application/json" http://localhost:8000/v1/health/patch
> ```
</details>

<br>

<details>
	<summary>
		<code>DELETE</code>
		<code>
			<b>/v1/health/delete</b>
		</code>
		<code>(check that the server is running and can DELETE to it)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `DELETE request endpoint`                                            |

##### Example cURL
> ```bash
> curl -X DELETE -H "Content-Type: application/json" http://localhost:8000/v1/health/delete
> ```
</details>

------------------------------------------------------------------------------------------
#### Shopmonkey Auth Test Routes

#### Shopmonkey Customer Routes

#### Shopmonkey Inventory Routes

#### Shopmonkey Appointment Routes

## Contributors
- [Jesstin Swadley](https://github.com/JesstinSwadley)