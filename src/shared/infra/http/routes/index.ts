import { Router } from 'express'
import callsRouter from '@modules/calls/infra/http/routes/calls.routes'
import plansRouter from '@modules/plans/infra/http/routes/plans.routes'
import simulatePlanUseRouter from '@modules/plans/infra/http/routes/simulatePlanUse.routes'
import userRouter from '@modules/users/infra/http/routes/users.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
import profileRouter from '@modules/users/infra/http/routes/profile.routes'
import regionsRouter from '@modules/regions/infra/http/routes/regions.routes'
const routes = Router()

routes.use('/calls', callsRouter)
routes.use('/plans', plansRouter)
routes.use('/plans/simulate', simulatePlanUseRouter)
routes.use('/users', userRouter)

routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
routes.use('/profile', profileRouter)
routes.use('/regions', regionsRouter)

export default routes;