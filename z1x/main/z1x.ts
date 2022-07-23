

export { CApp };


class CApp {

    static async run(): Promise<CApp> {
        
        console.log("(() => z1x.CApp.run())();");
        
        let x = new CApp();
 
        // x.jumpIntoVirtualDimension();
        return x;
    }

};



const z1x = { CApp: CApp }; // workaround javascript namespaces


