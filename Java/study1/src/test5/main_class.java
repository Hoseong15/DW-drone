package test5;

import java.util.Scanner;

public class main_class {
  public static void main(String[] args) {
    // int num1 = 10;
    // int num2 = 40;
    // if (num1 > num2) {
    // System.out.println("큰 숫자 : " + num1);
    // } else {
    // System.out.println("큰 숫자 : " + num2);
    // }

    Scanner sc = new Scanner(System.in);
    // int tall = sc.nextInt();
    // // 키가 130이상만 바이킹 탈 수 있다.
    // if (tall >= 130) {
    // System.out.println("바이킹 탑승 가능");
    // } else {
    // System.out.println("탑승 불가능");
    // }

    System.out.print("이름 입력하시오 ");
    String name = sc.next();
    if (name.equals("이순신")) {
      System.out.println("올바른 이름을 입력하셨습니다");
    } else {
      System.out.println("이름이 달라요~!!");
    }

    // indexof , contains
    if (name.contains("이")) {
      System.out.println("포함되어있음");

    } else {
      System.out.println("잘못입력하심");

    }

    if (name.indexOf("신") != -1) {
      System.out.println("신이 입력되었습니다.");
    } else {
      System.out.println("잘못입력하심");
    }

  }
}
