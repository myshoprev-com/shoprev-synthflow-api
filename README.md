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
$ SHOPMONKEY_BEARER_TOKEN=apiaccesskey SSL_CERT=/path/to/certificate SSL_KEY=/path/to/key HTTPS_PORT=PORTNUM HTTP_PORT=PORTNUM npm run start
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
> $ curl -X POST -H "Content-Type: application/json" http://localhost:8000/v1/health/post
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
> $ curl -X GET -H "Content-Type: application/json" http://localhost:8000/v1/health/get
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
> $ curl -X PATCH -H "Content-Type: application/json" http://localhost:8000/v1/health/patch
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
> $ curl -X DELETE -H "Content-Type: application/json" http://localhost:8000/v1/health/delete
> ```
</details>

------------------------------------------------------------------------------------------
#### Shopmonkey Auth Test Routes
<details>
	<summary>
		<code>GET</code>
		<code>
			<b>/v1/shopmonkey/auth-test</b>
		</code>
		<code>(perform an auth test with shopmonkey's API and get the token back as a response)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `a8F3kL92mN6pQ1rS4tUv7wX0yZ5bC1dE`                                  |

##### Example cURL
> ```bash
> $ curl -X GET -H "Content-Type: application/json" http://localhost:8000/v1/shopmonkey/auth-test
> ```
</details>

------------------------------------------------------------------------------------------

#### Shopmonkey Customer Routes
<details>
	<summary>
		<code>POST</code>
		<code>
			<b>/v1/shopmonkey/customer/new</b>
		</code>
		<code>(request to make a new customer inside of shopmonkey)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `b9G3lM03nO7qR2sT5uVw8xY1zA6cD2eF`                                  |

##### Example cURL
> ```bash
> $ curl -X POST -H "Content-Type: application/json" -d 'customerFirstName=John&customerLastName=Doe&customerPhoneNumber=(555)123-4567&customerEmail=john@doe.com&customerType=Customer' http://localhost:8000/v1/shopmonkey/customer/new
> ```
</details>

<br>

<details>
	<summary>
		<code>POST</code>
		<code>
			<b>/v1/shopmonkey/customer/phone-number</b>
		</code>
		<code>(request to find a customer inside of shopmonkey by their phone number)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `{ data: [{ ..., ..., ..., ... }]}`                                 |

##### Example cURL
> ```bash
> $ curl -X POST -H "Content-Type: application/json" -d 'customerPhoneNumber=(555)123-4567' http://localhost:8000/v1/shopmonkey/customer/phone-number
> ```
</details>

<br>

<details>
	<summary>
		<code>POST</code>
		<code>
			<b>/v1/shopmonkey/customer/email</b>
		</code>
		<code>(request to find a customer inside of shopmonkey by their email)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `{ data: [{ ..., ..., ..., ... }]}`                                 |

##### Example cURL
> ```bash
> $ curl -X POST -H "Content-Type: application/json" -d 'customerEmail=john@doe.com' http://localhost:8000/v1/shopmonkey/customer/email
> ```
</details>

<br>

<details>
	<summary>
		<code>POST</code>
		<code>
			<b>/v1/shopmonkey/customer/update</b>
		</code>
		<code>(request to update a customer inside of shopmonkey by their id)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `b9G3lM03nO7qR2sT5uVw8xY1zA6cD2eF`                                  |

##### Example cURL
> ```bash
> $ curl -X POST -H "Content-Type: application/json" -d 'customerFirstName=John&customerLastName=Doe&customerPhoneNumber=(555)123-4567&customerEmail=john@doe.com&customerType=Customer&customerId=c0H4lM03nO7qR3tU6vWY8xY1zB7dE3fG' http://localhost:8000/v1/shopmonkey/customer/update
> ```
</details>

------------------------------------------------------------------------------------------

#### Shopmonkey Inventory Routes
<details>
	<summary>
		<code>POST</code>
		<code>
			<b>/v1/shopmonkey/tire-inventory</b>
		</code>
		<code>(request to list all canned servires for tires from shopmonkey)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `{ data: [{ ..., ..., ..., ... }]}`                                 |

##### Example cURL
> ```bash
> $ curl -X GET -H "Content-Type: application/json" http://localhost:8000/v1/shopmonkey/tire-inventory
> ```
</details>

------------------------------------------------------------------------------------------

#### Shopmonkey Appointment Routes
<details>
	<summary>
		<code>POST</code>
		<code>
			<b>/v1/shopmonkey/appointment/create</b>
		</code>
		<code>(request to find a customer inside of shopmonkey by their email)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `{ data: [{ ..., ..., ..., ... }]}`                                 |

##### Example cURL
> ```bash
> $ curl -X POST -H "Content-Type: application/json" -d 'appointmentColor=Blue&appointmentName=SomeAppointmentName&appointmentStartDate01/01/2000&appointmentEndDate=01/02/2000' http://localhost:8000/v1/shopmonkey/appointment/create
> ```
</details>

<br>

<details>
	<summary>
		<code>GET</code>
		<code>
			<b>/v1/shopmonkey/appointment/list</b>
		</code>
		<code>(request to find a customer inside of shopmonkey by their email)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `{ data: [{ ..., ..., ..., ... }]}`                                 |

##### Example cURL
> ```bash
> $ curl -X GET -H "Content-Type: application/json" http://localhost:8000/v1/shopmonkey/appointment/list
> ```
</details>

<br>

<details>
	<summary>
		<code>POST</code>
		<code>
			<b>/v1/shopmonkey/appointment/update</b>
		</code>
		<code>(request to find a customer inside of shopmonkey by their email)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `{ data: [{ ..., ..., ..., ... }]}`                                 |

##### Example cURL
> ```bash
> $ curl -X POST -H "Content-Type: application/json" -d 'appointmentId=ai48ZHoT8nMY4&appointmentName=SomeAppointmentName&appointmentStartDate01/01/2000&appointmentEndDate=01/02/2000' http://localhost:8000/v1/shopmonkey/appointment/update
> ```
</details>

<br>

<details>
	<summary>
		<code>POST</code>
		<code>
			<b>/v1/shopmonkey/appointment/cancel</b>
		</code>
		<code>(request to find a customer inside of shopmonkey by their email)</code>
	</summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | `{ data: [{ ..., ..., ..., ... }]}`                                 |

##### Example cURL
> ```bash
> $ curl -X POST -H "Content-Type: application/json" -d 'appointmentId=ai48ZHoT8nMY4&appointmentCancellationNote=SomeReasonForCancellation' http://localhost:8000/v1/shopmonkey/appointment/cancel
> ```
</details>

------------------------------------------------------------------------------------------

## Contributors
- [Jesstin Swadley](https://github.com/JesstinSwadley)