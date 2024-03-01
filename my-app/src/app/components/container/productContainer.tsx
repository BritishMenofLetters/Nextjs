
function ProductContainer() {

    return(
    <>
        <div className= "shadow rounded-md p-4 w-full mx-auto bg-zinc-800 max-w-32">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    
                    {
                    // image
                    }
                    <div className="h-64 bg-stone-400 rounded"/>

                        
                    <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-4 bg-stone-400 rounded col-span-1"/>
                        </div>
                        <div className="h-3 bg-stone-400 rounded"/>
                    </div>

                        
                    
                    <div className="space-y-3">
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-8 w-20 bg-stone-400 rounded col-span-1"/>
                            <div className="rounded-full bg-stone-400 h-10 w-10 justify-self-end"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default ProductContainer;