import { Auth0Provider } from "@bcwdev/auth0provider";
import { planetService } from "../services/PlanetService.js"
import BaseController from "../utils/BaseController.js"

export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)

            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)
    }

    async getPlanets(request, response, next) {
        try {
            const planets = await planetService.getPlanets()
            response.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async createPlanet(request, response, next) {
        try {
            const planetData = request.body
            const planet = await planetService.createPlanet(planetData)
            response.send(planet)
        } catch (error) {
            next(error)
        }
    }

}