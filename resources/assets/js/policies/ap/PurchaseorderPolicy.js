import Policy from './../Policy';

export default class PurchaseorderPolicy extends Policy
{

    static params() {
        return {
            type: 'purchaseorder',
            roles: ['admin', 'accountant']
        };
    }

    static create(user)
    {
        super.create(user, this.params());
    }

    static view(user, purchaseorder)
    {
        super.view(user, purchaseorder, this.params());
    }

    static delete(user, purchaseorder)
    {
        super.delete(user, purchaseorder, this.params());
    }

    static update(user, purchaseorder)
    {
        super.update(user, purchaseorder, this.params());        
    }
}