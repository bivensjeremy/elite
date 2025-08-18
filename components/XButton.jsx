'use client'
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";

const XButton = (props) => {
    return (
        <Popover showArrow offset={10} placement="bottom">
            <PopoverTrigger>
                <Button 
                    {...props}
                    
                >
                    Get an Estimate
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-lg">
                {(titleProps) => (
                <div className="px-1 py-2 w-full">
                    <p className="text-small font-bold text-foreground" {...titleProps}>
                    Request An Estimate
                    </p>
                    <div className="mt-2 flex flex-col gap-2 w-full">
                        <Form>
                            <Input label="Name" size="sm" variant="bordered" />
                            <Input label="Email" size="sm" variant="bordered" />
                            <Input label="Phone Number" size="sm" variant="bordered" />
                            <Textarea defaultValue="How Can We Help?" label="Message" size="sm" variant="bordered" />
                            <div className="flex flex-row justify-end w-full">
                                <Button color="secondary">Submit</Button>
                            </div>
                            
                        </Form>
                    
                    </div>
                </div>
                )}
            </PopoverContent>
        </Popover>
    );
}

export default XButton;