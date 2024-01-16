import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = ({ searchParams }: { searchParams: { message: string } }) => {
  return (
    <Tabs
      defaultValue="signin"
      className="fixed w-[calc(100vw-3.5rem)] md:w-[400px]"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card>
          <CardContent>
            <SignInForm></SignInForm>
          </CardContent>
          <CardFooter>
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
            )}
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardContent>
            <SignUpForm></SignUpForm>
          </CardContent>
          <CardFooter>
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
            )}
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    // <Tabs aria-label="AuthOptions">
    //   <Tab key="sign-in" title="Sign In">
    //
    //   </Tab>
    //   <Tab key="sign-up" title="Sign Up">
    //     <Card>
    //       <CardContent>
    //
    //       </CardContent>
    //     </Card>
    //   </Tab>
    // </Tabs>
  );
};

export default page;
