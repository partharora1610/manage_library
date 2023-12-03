"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createBook } from "@/lib/actions/book.action";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  bookName: z.string(),
  author: z.string(),
  imageUrl: z.string(),
  genre: z.string(),
});

const BookForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookName: "",
      author: "",
      imageUrl: "",
      genre: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      const data = await createBook({
        title: values.bookName,
        author: values.author,
        genre: values.genre,
        image: values.imageUrl,
      });
      console.log(data);

      form.reset();
      router.push("/manage-library");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-[800px] ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="bookName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the Name of the Book</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the Name of the Author</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the Image Url</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the Genre</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <p>[Will Add the QR code functionality later]</p>
          <p>[later the imageUrl will be fetched via a api]</p>

          <Button
            type="submit"
            className="text-base font-medium py-6 bg-primary-500 text-white flex w-full"
          >
            Add a book
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookForm;
