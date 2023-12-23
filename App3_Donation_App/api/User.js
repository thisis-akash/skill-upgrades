import auth from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {

    try {

        const user = await auth().createUserWithEmailAndPassword(email, password);

        await user.user.updateProfile({ displayName: fullName });

        return user;

    } catch (ex) {

        let errorMessage = 'Something went wrong with your request.';

        if (ex.code === 'auth/email-already-in-use') {
            errorMessage = 'The email you entered is already in use.';
        } else if (ex.code === 'auth/invalid-email') {
            errorMessage = 'Please enter a valid email address.';
        }

        return { error: errorMessage };

    }

};

export const loginUser = async (email, password) => {

    try {

        const response = await auth().signInWithEmailAndPassword(email, password);
        const token = await response.user.getIdToken();

        return {
            status: true,
            data: {
                displayName: response.user.displayName,
                email: response.user.email,
                token,
            },
        };

    } catch (ex) {

        let errorMessage = 'Something went wrong.';

        if (ex.code === 'auth/invalid-credential') {
            errorMessage = 'Please enter correct credentials.';
        }

        return { status: false, error: errorMessage };

    }

};