<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const tasks = [
  ["TRULAY-1", "共通", "ドキュメント整備", "Trulay構想整理", "完了", "2h", "5/15", "5/16"],
  ["TRULAY-2", "共通", "ドキュメント整備", "設計書PDF出力環境を整備", "完了", "3h", "5/16", "5/16"],
  ["TRULAY-3", "フェーズ1", "要件定義", "MVP範囲整理", "完了", "5h", "5/17", "5/18"],
  ["TRULAY-4", "フェーズ1", "要件定義", "要件定義整理", "完了", "4h", "5/18", "5/21"],
  ["TRULAY-29", "共通", "ドキュメント整備", "公開用開発ログリポジトリ作成", "完了", "3h", "5/18", "5/20"],
  ["TRULAY-5", "フェーズ1", "基本設計", "画面一覧整理", "完了", "4h", "5/20", "5/23"],
  ["TRULAY-6", "フェーズ1", "基本設計", "システム構成整理", "完了", "5h", "5/22", "5/26"],
  ["TRULAY-7", "フェーズ1", "基本設計", "認証機能の基本設計", "未着手", "5h", "5/25", "5/29"],
  ["TRULAY-8", "フェーズ1", "基本設計", "プロフィール機能の基本設計", "未着手", "4h", "5/28", "5/31"],
  ["TRULAY-9", "フェーズ1", "基本設計", "企業情報管理機能の基本設計", "未着手", "5h", "5/30", "6/3"],
  ["TRULAY-10", "フェーズ1", "基本設計", "案件候補管理機能の基本設計", "未着手", "5h", "6/2", "6/6"],
  ["TRULAY-11", "フェーズ1", "基本設計", "応募・商談状況管理機能の基本設計", "未着手", "5h", "6/5", "6/9"],
  ["TRULAY-12", "フェーズ1", "基本設計", "メモ・次回アクション管理機能の基本設計", "未着手", "4h", "6/8", "6/11"],
  ["TRULAY-13", "フェーズ1", "詳細設計", "DB設計", "未着手", "6h", "6/10", "6/14"],
  ["TRULAY-14", "フェーズ1", "詳細設計", "API設計", "未着手", "6h", "6/13", "6/17"],
  ["TRULAY-15", "フェーズ1", "基本設計", "UI方針整理", "未着手", "4h", "6/16", "6/19"],
  ["TRULAY-16", "共通", "環境構築", "trulay-infra構成整理", "未着手", "3h", "6/18", "6/21"],
  ["TRULAY-17", "共通", "環境構築", "ローカルDocker環境構築", "未着手", "5h", "6/20", "6/24"],
  ["TRULAY-18", "フェーズ1", "開発", "アプリケーション初期構築", "未着手", "5h", "6/23", "6/27"],
  ["TRULAY-19", "フェーズ1", "開発", "認証機能実装", "未着手", "10h", "6/26", "7/2"],
  ["TRULAY-20", "フェーズ1", "開発", "プロフィール機能実装", "未着手", "6h", "7/1", "7/5"],
  ["TRULAY-21", "フェーズ1", "開発", "企業情報管理機能実装", "未着手", "8h", "7/4", "7/9"],
  ["TRULAY-23", "フェーズ1", "開発", "案件候補管理機能実装", "未着手", "8h", "7/8", "7/13"],
  ["TRULAY-24", "フェーズ1", "開発", "応募・商談状況管理機能実装", "未着手", "8h", "7/12", "7/17"],
  ["TRULAY-25", "フェーズ1", "開発", "メモ・次回アクション管理機能実装", "未着手", "6h", "7/16", "7/20"],
  ["TRULAY-26", "共通", "テスト", "テスト方針整理", "未着手", "3h", "7/19", "7/22"],
  ["TRULAY-27", "共通", "環境構築", "GitHub Actions導入", "未着手", "4h", "7/21", "7/24"],
  ["TRULAY-28", "共通", "ドキュメント整備", "README/開発手順整備", "未着手", "2h", "7/23", "7/25"]
];

const scrollRef = ref<HTMLDivElement | null>(null);
const showHint = ref(false);
const hintDismissible = ref(false);
let isDown = false;
let startX = 0;
let scrollLeft = 0;
let observer: IntersectionObserver | null = null;
let dismissibleTimer: ReturnType<typeof window.setTimeout> | null = null;

function onPointerDown(event: PointerEvent) {
  if (event.pointerType === "touch" || !scrollRef.value) return;
  hideHint();
  isDown = true;
  startX = event.clientX;
  scrollLeft = scrollRef.value.scrollLeft;
  scrollRef.value.setPointerCapture(event.pointerId);
}

function hideHint() {
  if (!hintDismissible.value) return;
  showHint.value = false;
}

function onPointerMove(event: PointerEvent) {
  if (!isDown || !scrollRef.value) return;
  event.preventDefault();
  scrollRef.value.scrollLeft = scrollLeft - (event.clientX - startX);
}

function stopDrag(event: PointerEvent) {
  if (!scrollRef.value) return;
  isDown = false;
  if (scrollRef.value.hasPointerCapture(event.pointerId)) {
    scrollRef.value.releasePointerCapture(event.pointerId);
  }
}

onMounted(() => {
  if (!scrollRef.value) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting || !scrollRef.value) return;
      if (scrollRef.value.scrollWidth <= scrollRef.value.clientWidth) return;

      showHint.value = true;
      hintDismissible.value = false;
      dismissibleTimer = window.setTimeout(() => {
        hintDismissible.value = true;
      }, 3200);
      observer?.disconnect();
    },
    { threshold: 0.35 }
  );

  observer.observe(scrollRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  if (dismissibleTimer) {
    window.clearTimeout(dismissibleTimer);
  }
});
</script>

<template>
  <div
    ref="scrollRef"
    class="roadmap-table-scroll"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="stopDrag"
    @pointercancel="stopDrag"
    @pointerleave="stopDrag"
    @scroll="hideHint"
    @wheel="hideHint"
    @touchstart="hideHint"
  >
    <Transition name="roadmap-hint">
      <button
        v-if="showHint"
        class="roadmap-scroll-hint"
        type="button"
        aria-label="スクロールヒントを閉じる"
        @pointerdown.stop
        @pointermove.stop
        @pointerup.stop
        @click.stop="showHint = false"
      >
        <span class="roadmap-scroll-hand" aria-hidden="true">
          <span class="roadmap-scroll-hand-motion">
          <svg viewBox="0 0 64 64" role="img">
            <path
              d="M30 11a5 5 0 0 1 5 5v17l2-2a5 5 0 0 1 7 7L34 51a10 10 0 0 1-8 4h-3a10 10 0 0 1-9-6L8 34a5 5 0 0 1 9-4l3 7V16a5 5 0 0 1 10-5Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            />
          </svg>
          </span>
        </span>
        <span class="roadmap-scroll-hint-text">スクロールできます</span>
      </button>
    </Transition>
    <table class="roadmap-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>フェーズ</th>
          <th>工程</th>
          <th>タスク</th>
          <th>状態</th>
          <th>予定</th>
          <th>開始</th>
          <th>期限</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task[0]">
          <td v-for="(value, index) in task" :key="`${task[0]}-${index}`">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
