import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
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
        <Card isBlurred>
          <CardContent>
            <SignInForm></SignInForm>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card isBlurred>
          <CardContent>
            <SignUpForm></SignUpForm>
          </CardContent>
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
