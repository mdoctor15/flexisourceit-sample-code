<?php

namespace App\Modules\AR\Controllers;

use App\Modules\AR\Models\Receipt;
use App\Modules\Directories\Models\AR\Company;
use App\Modules\Directories\Models\AR\Customergroup;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use Auth;

class ReceiptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()
            ->json([
                'model' => Receipt::with('company')->filterPaginateOrder()
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function show(Receipt $receipt)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $receipt = Receipt::with('items')->findOrFail($id);

        return response()
            ->json([
                'form' => $receipt,
                'option' => [
                    'companies' => Company::orderBy('Company')->get(),
                    'customergroups' => Customergroup::orderBy('CustomerGroupName')->get(),
                    // 'expensetypes' => ExpenseType::orderBy('ExpenseTitle')->get()
                ]
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Receipt $receipt)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function destroy(Receipt $receipt)
    {
        //
    }
}
