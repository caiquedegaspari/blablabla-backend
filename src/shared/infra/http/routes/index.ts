import { Router } from 'express'
import userRouter from '@modules/users/infra/http/routes/users.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
import profileRouter from '@modules/users/infra/http/routes/profile.routes'
import levelsRouter from '@modules/levels/infra/http/routes/levels.routes'
import themesRouter from '@modules/themes/infra/http/routes/themes.routes'
import audiosRouter from '@modules/audios/infra/http/routes/audios.routes'
import textsRouter from '@modules/texts/infra/http/routes/texts.routes'

const routes = Router()


routes.use('/users', userRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
routes.use('/profile', profileRouter)
routes.use('/levels', levelsRouter)
routes.use('/themes', themesRouter)
routes.use('/audios', audiosRouter)
routes.use('/texts', textsRouter)


export default routes;