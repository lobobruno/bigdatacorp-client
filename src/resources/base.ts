import type { HttpClient } from "../http/http-client"

export abstract class BaseResource {
	constructor(protected readonly http: HttpClient) {}
}
