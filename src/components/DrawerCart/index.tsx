import Drawer from "@mui/material/Drawer";

import { DrawerContent } from "./DrawerContent";

type Props = {
  open: boolean;
  setOpen: Function;
};
export default function DrawerCart({ open, setOpen }: Props) {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <DrawerContent />
      </Drawer>
    </div>
  );
}
