import React from "react";
import { Dialog, DialogContent } from "@mui/material"


const SignInPopUp = (prop) => {
    const { children, openpopup } = prop





    return (



        <Dialog open={openpopup}  >
            <DialogContent>
                {children}
            </DialogContent>

        </Dialog>

    )


}
export default SignInPopUp