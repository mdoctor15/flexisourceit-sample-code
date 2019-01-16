export default class Policy
{
    
    static create(user, params)
    {
        return params.roles.some(role => user.roles.includes(role));
    }

    static view(user, model, params)
    {
        return params.roles.some(role => user.roles.includes(role));
    }

    static delete(user, model, params)
    {
        return params.roles.some(role => {
            if (user.roles.includes(role)) {
                return user.roles[role].includes('delete ' + params.type);
            }
        });

    }

    static update(user, model, params)
    {
        return params.roles.some(role => {
            if (user.roles.includes(role)) {
                return user.roles[role].includes('update ' + params.type);
            }
        });
        
    }
}