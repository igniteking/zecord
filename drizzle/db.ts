import { getXataClient } from "@/xata";
import { drizzle } from "drizzle-orm/xata-http";

const xeta = getXataClient();
export const db = drizzle(xeta);
