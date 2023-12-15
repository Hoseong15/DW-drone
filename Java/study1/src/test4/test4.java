package test4;

import java.util.Scanner;

public class test4 {
  public static void main(String[] args){
    int num = 100;
    // System.out.println("한줄씩 출력" + num);
    // System.out.print("줄바꿈없이 출력" + num);
    // System.out.print("이어서 나온다" + num);
    // System.out.printf("포맷지정 %d", num);
    // %d- 정수 , %f-살수 , %c-문자 , %s - 문자열
    // \n - 개행 , \t - 탭 , \' , \" , \r - 캐리지 리턴 , \b -백스페이스

    int a = 10, b = 20;
    float c = 3.12345f;

    // System.out.printf("%d %d %f",a,b,c);
    // System.out.printf("%f %d \n",c,a);
    // System.out.printf("실수는 %.1f이다 \n" , c);
    // System.out.printf("10 + 20 = %d" , 10 + 20);

    Scanner sc = new Scanner(System.in); // 자바에서 입력받으려면 Scanner 객체필요

    // System.out.print("정수 두개입력(하나 입력하고 엔터키 눌러서 두번째입력)");
    // int num1 = sc.nextInt();
    // short num2 = sc.nextShort();
    // System.out.println(num1 + " " + num2);
   
    // System.out.print("이름 입력 : ");
    // String name = sc.next();
    // System.out.println("이름은" + name);

    // 사각형의 너비와 높이를 입력받아 넓이를 출력하세요
    // System.out.print("너비는 : ");
    // int wid = sc.nextInt();
    // System.out.print("높이는 : ");
    // int hei = sc.nextInt();
    // System.out.print("사각형의 넓이는 " + (wid * hei));

    // 국어, 영어 , 역사 3과목의 점수를 입력받아 총점과 평균을 출력하세여

    System.out.print("3과목의 점수를 입력하세요! ");
    int 국어 = sc.nextInt();
    int 영어 = sc.nextInt();
    int 역사 = sc.nextInt();

    int 총점 = 국어 + 영어 + 역사;
    int 평균 = 총점 /3;
    System.out.println("총점수: "+총점 + "평균점수: " + 평균);
    System.out.printf("총점 : %d점, 평균 : %d점 \n", 총점,평균);

  }
}
