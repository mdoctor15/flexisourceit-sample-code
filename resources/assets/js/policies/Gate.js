// Gate.js

import InvoicePolicy from './ar/InvoicePolicy';

import PurchaseorderPolicy from './ap/PurchaseorderPolicy';

import UserPolicy from './references/UserPolicy';
import RolePolicy from './references/RolePolicy';

export default class Gate
{
    constructor(user)
    {
        this.user = user;

        this.policies = {
            invoice: InvoicePolicy,
            purchaseorder: PurchaseorderPolicy,
            user: UserPolicy,
            role: RolePolicy
        };
    }

    before()
    {
        return this.user.roles.includes('admin');
    }

    allow(action, type, model = null)
    {
        // check if admin
        if (this.before()) {
            return true;
        }

        return this.policies[type][action](this.user, model);
    }

    deny(action, type, model = null)
    {
        return ! this.allow(action, type, model);
    }
}


/*
example:
    <ul>
        <li v-for="post in posts">{{ post.title }} <a :href="post.edit_route" v-if="$gate.allow('update', 'post', post)">Edit<a></li>
    </ul>

 */