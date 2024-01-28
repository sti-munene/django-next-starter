import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function SignInDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Sign in</DrawerTitle>
            <DrawerDescription>
              Pick up from where you left off.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-0">
            <form method="post" action="/api/auth/callback/credentials">
              {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
              <label>
                Username
                <input name="username" type="text" />
              </label>
              <label>
                Password
                <input name="password" type="password" />
              </label>
              <button type="submit">Sign in</button>
            </form>
          </div>

          <DrawerFooter>
            <Button>Submit</Button>

            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
