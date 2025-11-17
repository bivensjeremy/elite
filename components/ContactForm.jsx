'use client'
import { Input, Textarea } from '@heroui/input';
import { Form } from '@heroui/form';
import { Select, SelectItem } from '@heroui/select';
import { Button } from '@heroui/button';

const ContactForm = () => {
    const animals = [
        {key: "estimate", label: "Get an Estimate"},
        {key: "question", label: "Ask a Question"},
        {key: "employment", label: "Employment"},
        {key: "bug", label: "Report a Bug"},
        {key: "feedback", label: "Send Feedback"},
        {key: "other", label: "Something Else"},
    ];

    return (
        <Form className=''>
            <Input 
                label="Name"
                type='text'
                className='border rounded-xl'
                // radius='none'
            />

            <Input
                label="Email"
                type='email'
                className='border rounded-xl'
                // radius='none'
            />

            <Select
                // className="max-w-xs" 
                label="Subject"
                className='border rounded-xl'
                // radius='none'
                defaultSelectedKeys={["estimate"]}
            >
                {animals.map((animal) => (
                <SelectItem 
                    key={animal.key}>{animal.label}</SelectItem>
                ))}
            </Select>

            <Textarea
                label="Message" 
                className='border rounded-xl'
            />

            <div className='flex justify-end w-full'>
                <Button size='lg' color='primary'>
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default ContactForm;