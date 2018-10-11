<?php

namespace App\Http\Controllers;
use App\Quote ;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuotesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getQuote()
    {
        $quotes = Quote::all();
        return response()->json([
            'quotes' => $quotes
        ],200);

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
    public function postQuote(Request $request)
    {
        $quote = new Quote();
        $quote-> content = $request->input('content');
        $quote-> save();
        return response()->json([
            'quote' => $quote
        ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function putQuote(Request $request, $id)
    {
        $quote = Quote::find($id);
        if (!$quote){
            return response()->json(['message'=> 'Quote not found'],201);
        }

        $quote->content = $request->input('content');
        $quote-> save();
        return response()->json([
            'quote' => $quote
        ],200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteQuote($id)
    {
        $quote = Quote::find($id);
        $quote->delete();
    }
}
