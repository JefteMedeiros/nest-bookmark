import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { msg: "geovana soca fofo" }
  }

  signin() {
    return { msg: "geovana soca forte" }
  }
}
