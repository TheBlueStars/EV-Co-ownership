import mongoose from "mongoose"
// import mongoose from "../../../../libs/db.js";


const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  fundBalance: { type: Number, default: 0 },
  members: [
    {
      coOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      ownershipPercentage: { type: Number, default: 0 },
    },
  ],
}, { timestamps: true })

export default mongoose.model("Group", groupSchema)
