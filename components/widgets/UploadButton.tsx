// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function
"use client";

import { useUploadThing } from "@/utils/uploadthing/component";
import { useDropzone } from "@uploadthing/react/hooks";
import { useCallback, useState } from "react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Spinner } from "@nextui-org/spinner";
import { toast } from "sonner";


export function MultiUploader() {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, permittedFileInfo } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      setIsUploading(false);
      setFiles([]);
      toast.success("files uploaded successfully!");
    },
    onUploadError: () => {
      toast.error("error occurred while uploading!!");
    },
    onUploadBegin: () => {
      setIsUploading(true);
    },
  });

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  return (
    <div>
      <Card>
        <div {...getRootProps()} className="h-24 w-40 p-4 flex justify-center items-center cursor-pointer">
          {/* @ts-ignore */}
          <input className="border" {...getInputProps()} type="file" />
          <span className="text-gray-300 font-semibold">Drop files here!</span>
        </div>
      </Card>
      <div className="flex mt-3 w-full justify-center">
          <Button
            onClick={() => startUpload(files!)}
            className="gap-2"
            isDisabled={isUploading || files.length === 0}
          >
            <span>
              {files.length > 0 ? isUploading ? "Uploading..." : `Upload ${files.length} files` : "Upload"}
            </span>
            {isUploading && <Spinner size="sm" color="default"></Spinner>}
          </Button>
      </div>
    </div>
  );
}
