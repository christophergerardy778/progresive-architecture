import { router } from '../../router';
import { signUpController } from '../controllers/signUpController';
import { validateSignUpSchema } from '../middleware/validateSignUpSchema';

router.post('/sign-up', [validateSignUpSchema], signUpController);

export const authRouter = router;
