import Policy from './../Policy';

export default class InvoicePolicy extends Policy
{

    static params() {
        return {
            type: 'invoice',
            roles: ['admin', 'accountant']
        };
    }

    static create(user)
    {
        super.create(user, this.params());
    }

    static view(user, invoice)
    {
        super.view(user, invoice, this.params());
    }

    static delete(user, invoice)
    {
        super.delete(user, invoice, this.params());
    }

    static update(user, invoice)
    {
        super.update(user, invoice, this.params());        
    }
}