import { router } from '../../router/router';
import { signUpController } from '../controllers/signUpController';

router.get('/sign-up', signUpController);

export const authRouter = router;
