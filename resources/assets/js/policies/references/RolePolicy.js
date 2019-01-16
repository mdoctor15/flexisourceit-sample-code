import Policy from './../Policy';

export default class RolePolicy extends Policy
{
    static params() {
        return {
            type: 'role',
            roles: ['admin']
        };
    }

    static create(user)
    {
        super.create(user, this.params());
    }

    static view(user, role)
    {
        super.view(user, role, this.params());
    }

    static delete(user, role)
    {
        super.delete(user, role, this.params());
    }

    static update(user, role)
    {
        super.update(user, role, this.params());
    }
}