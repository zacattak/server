import { dbContext } from "../db/DbContext.js"

class PlanetService {
    async getPlanets() {
        const planets = await dbContext.Planets.find().populate('creator', 'name')
        return planets
    }
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }
}

export const planetService = new PlanetService()