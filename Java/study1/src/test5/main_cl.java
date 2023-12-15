package test5;

import java.util.Random;
import java.util.Scanner;

public class main_cl {
  static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {

    // for (int i = 0; i <= 5; i++) {
    // System.out.println(i);
    // }

    // // 구구단 2단부터 9단까지 출력

    // for (int i = 2; i <= 9; i++) {
    // for (int k = 1; k <= 9; k++) {
    // System.out.printf("%d * %d = %d \n", i, k, i * k);
    // }
    // }

    // for (int i = 1;; i++) {
    // System.out.println(i);
    // if (i == 1234)
    // break;
    // }

    // // 1부터 100까지 중에서 10의 배수를 빼고 출력
    // for (int i = 1; i <= 100; i++) {
    // if (i % 10 == 0)
    // continue;
    // System.out.println(i);
    // }

    // 반복문 문제
    // 정수를 하나 입력받아서 입력한 정수만큼 반복되게 만드세요
    // System.out.print("정수를 입력 ");
    // int cnt = new Scanner(System.in).nextInt();

    // for (int i = 1; i <= cnt; i++) {
    // System.out.println(i);
    // }

    // int x = 1;
    // while(x <=10) {
    // System.out.println(x);
    // x++;
    // }

    // while(true) {
    // System.out.print("정수 입력 : ");
    // int num = scan.nextInt();

    // if(num == 0)
    // break;
    // }

    // 0을 입력하시전까지 계속 정수를 입력한다.
    // 0을 입력하면 지금까지 입력했던 모든 정수의 합을 출력
    // int sum = 0;
    // while (true) {
    // System.out.print("정수 일력");
    // int num1 = scan.nextInt();
    // sum += num1;

    // if (num1 == 0) {
    // break;
    // }
    // }
    // System.out.printf("%d", sum);

    // Math.floor(Math.random() * 10) +1;

    // int rdm = (int)(Math.random()*10)+1;
    // // System.out.println(rdm);

    // Random rd = new Random();

    // rdm = rd.nextInt(10)+1; // 0~10전까지 난수
    // // System.out.print(rdm);

    // for(int i = 1; i <= 6; i++) {
    // System.out.println(rd.nextInt(45)+1);
    // }

    // 동전 앞면 뒷면 맞추기 (1.앞면 , 2.뒷면)

    int coin = (int)(Math.random()*2)+1;
    int user = scan.nextInt();

    System.out.println("맞춰보세요");
    
    if(user == coin) {
      System.out.print("맞춤");
    } else{
      System.out.print("틀림");
    }

  }
}