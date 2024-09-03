import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

interface DialogWindowProps {
    isDialogOpen: boolean;
    handleCLickCloseDialog: () => void;
}

const DialogWindow = ({ isDialogOpen, handleCLickCloseDialog }: DialogWindowProps) => {
    return (
        <Dialog
            open={isDialogOpen}
            onClose={handleCLickCloseDialog}
        >
            <DialogTitle>Log in</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Log in to see videos
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email address"
                    type="email"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleCLickCloseDialog}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleCLickCloseDialog}
                    color="primary"
                >
                    Log in
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export { DialogWindow };
