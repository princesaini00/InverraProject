"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition,setJobPosition]=useState();
  const [jobDesc,setJobDesc]=useState();
  const [jobExperience,setJobExperience]=useState();

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(jobPosition, jobExperience, jobDesc);
  }
  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New </h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview.
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
              <div>
                <h2>
                  Add details about your job position/role, job description and
                  years of experience.
                </h2>
                <div className="mt-7 my-3">
                  <label>Job Role/Job Position</label>
                  <Input placeholder="Ex. Full Stack Developer" required onChange={(event)=>{
                    setJobPosition(event.target.value)
                  }}></Input>
                </div>
                <div className="my-3">
                  <label>Job Description/Tech Stack (In Short)</label>
                  <Textarea placeholder="Ex. React, Angular, MySQL, NodeJS, etc." required onChange={(event)=>{
                    setJobDesc(event.target.value)}}></Textarea>
                </div>
                <div className="my-3">
                  <label>Years of Experience</label>
                  <Input placeholder="Ex. 5" required type="number" max="40" onChange={(event)=>{
                    setJobExperience(event.target.value)}}></Input>
                </div>
              </div>

              <div className="flex gap-5 justify-end">
                <Button type="button"
                  variant="ghost"
                  onClick={() => {
                    setOpenDialog(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" >Start Interview</Button>
              </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
