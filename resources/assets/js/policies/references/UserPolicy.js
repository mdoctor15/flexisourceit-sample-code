import Policy from './../Policy';

export default class UserPolicy extends Policy
{
    static params() {
        return {
            type: 'user',
            roles: ['admin']
        };
    }

    static create(user)
    {
        super.create(user, this.params());
    }

    static view(user, theUser)
    {
        super.view(user, theUser, this.params());
    }

    static delete(user, theUser)
    {
        super.delete(user, theUser, this.params());
    }

    static update(user, theUser)
    {
        super.update(user, theUser, this.params());
    }
}