import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PlanetSchema } from '../models/planet.js'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Animals = mongoose.model('Planet', PlanetSchema)
}

export const dbContext = new DbContext()
